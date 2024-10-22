import 'package:dock/dock/icon_model.dart';
import 'package:dock/dock/icon_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Dock extends StatefulWidget {
  const Dock({super.key});

  @override
  State<Dock> createState() => DockState();
}

class DockState extends State<Dock> {
  int count = 0;
  late IconProvider iconProvider;
  @override
  Widget build(BuildContext context) {
    iconProvider = Provider.of<IconProvider>(context, listen: false);
    iconProvider.updateIconSize = MediaQuery.of(context).size.width;
    return Scaffold(
      /// Listening to the [ selectedIcon ] to display app icon in the background
      /// See the comments at the bottom of the file for alternative appraoch.
      body: Selector<IconProvider, AppIcon?>(
          selector: (context, provider) => provider.selectedIcon,
          builder: (context, icon, child) => Container(
                width: double.infinity,
                height: double.infinity,
                decoration: icon != null
                    ? BoxDecoration(
                        image: DecorationImage(
                          image: AssetImage(icon.iconPath),
                        ),
                      )
                    : null,
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: Stack(
                    alignment: Alignment.bottomCenter,
                    children: [
                      buildIconShelf(),
                      Padding(
                        padding: const EdgeInsets.all(10),
                        child: Row(  // A row containing App icons
                          crossAxisAlignment: CrossAxisAlignment.end,
                          mainAxisSize: MainAxisSize.min,
                          children: List.generate(
                            iconProvider.totalIcons,
                            buildIconHover,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              )),
    );
  }

  /// Build and control the Hover effect of each Icon.
  /// Along with that, swaps the icons if drag is in progress.
  Widget buildIconHover(int index) {
    return Consumer<IconProvider>(
      builder: (context, provider, child) {
        return MouseRegion(
          cursor: SystemMouseCursors.click,
          onEnter: (_) => iconProvider.onHoverUpdateIcon(index),
          onExit: (_) => iconProvider.onHoverExit(),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              iconName(index),
              buildIconDragger(index,provider.isHoveringWhileDragging),
            ],
          ),
        );
      },
    );
  }

  /// Widget responsible for Icon dragging.
  /// [ data ]The data to be handled during this drag.
  /// [ feedback ] Widget to be displayed under the cursor, while dragging.
  /// [ child ] Icon to be dragged
  Widget buildIconDragger(int index,bool isHoverAndDrag) {
    return Draggable(
      onDragStarted: () => iconProvider.onDragStart(index),
      onDragEnd: iconProvider.onDragEnd,
      data: iconProvider.iconAt(index),
      feedback: buildIcon(index, isHoverAndDrag),
      child: buildIcon(index, isHoverAndDrag),
    );
  }

  /// Display [ Name ] of the icon, hovered over.
  Widget iconName(int index) {
    final nameBoxConstraint = iconProvider.iconSize * 0.15;
    return iconProvider.hoveredIndex == index &&
            iconProvider.draggedIndex == null
        ? Container(
            margin: EdgeInsets.only(bottom: nameBoxConstraint),
            padding: EdgeInsets.all(
              nameBoxConstraint,
            ),
            decoration: BoxDecoration(
              color: const Color.fromARGB(132, 56, 57, 57),
              borderRadius: BorderRadius.circular(
                nameBoxConstraint,
              ),
            ),
            child: Text(
              iconProvider.iconAt(index)!.iconName,
              style: TextStyle(
                fontSize: nameBoxConstraint * 1.5,
                color: Colors.white,
              ),
            ),
          )
        : const SizedBox();
  }

  /// Build the Animated Icon
  Widget buildIcon(int index, bool isHoverAndDrag) {
    AppIcon? icon = iconProvider.iconAt(index);
    final (size, translationY) = iconProvider.getSizeAndTranslation(index);

    return GestureDetector(
      onTap: () => iconProvider.selectIcon = icon,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 250),
        transform: Matrix4.identity()
          ..translate(0.0, translationY, 0.0), // Elevate the icon
        alignment: AlignmentDirectional.bottomCenter,
        height: !isHoverAndDrag && icon == null ? null : size,
        width: !isHoverAndDrag && icon == null ? null : size,
        child: icon != null ? Image.asset(icon.iconPath) : null,
      ),
    );
  }

  /// Builds the icon shelf for displaying icons.
  Widget buildIconShelf() {
    return Positioned(
      left: 0,
      right: 0,
      bottom: 10,
      height: iconProvider.iconSize,
      child: DecoratedBox(
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            colors: [
              Color.fromARGB(255, 160, 20, 179),
              Color.fromARGB(255, 55, 4, 106),
            ],
          ),
          borderRadius: BorderRadius.circular(iconProvider.iconSize * 0.2),
        ),
      ),
    );
  }
}

/// [ Second ] _ [ approach]
/// Use [ buildShelf ] function is to build the shelf to display icons.
/// It calculates the size of the Icons and adjust accordingly.
/// Ue [ buildBackground ] function to build the background .
/// Instead of wrapping the Stack with another Container and Selector.
/// Place it in the stack. ( reduce number of times build runs ).

/*
// Builds the icon shelf for displaying icons.
  Widget buildIconShelf() {
    return Selector<IconProvider, bool>(
        // Listens to the _hoverIndex to obtain the accurate width
        builder: (context, isHovering, child) {
          return Padding(
            padding: const EdgeInsets.only(bottom: 10.0),
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 250),
              height: iconProvider.iconSize,
              // Adjust the shelf width according to the scaledIcons
              width: isHovering
                  ? iconProvider.iconSize * iconProvider.totalIcons * 1.25
                  : iconProvider.iconSize * iconProvider.totalIcons,
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [
                    Color.fromARGB(255, 160, 20, 179),
                    Color.fromARGB(255, 55, 4, 106),
                  ],
                ),
                borderRadius:
                    BorderRadius.circular(iconProvider.iconSize * 0.2),
              ),
            ),
          );
        },
        selector: (context, provider) => provider.isHovering);
  }

  // Builds the background based on the selected icon.
  // Listens to the selectedIcon to display in the background
  Widget buildBackground() {
    return Selector<IconProvider, AppIcon?>(
      builder: (context, icon, child) {
        return Container(
          height: double.infinity,
          width: double.infinity,
          decoration: icon != null
              ? BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage(icon.iconPath),
                  ),
                )
              : null,
        );
      },
      selector: (context, iconProvider) => iconProvider.selectedIcon,
    );
  }

  */
