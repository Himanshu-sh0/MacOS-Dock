import 'package:dock/dock/icon_model.dart';
import 'package:flutter/material.dart';
import 'dart:ui';

class IconProvider extends ChangeNotifier {
  final List<AppIcon?> _icons = [
    AppIcon(iconName: "Astro", iconId: 1, iconPath: "assets/astro.png"),
    AppIcon(iconName: "Brewer X", iconId: 2, iconPath: "assets/brewer-x.png"),
    AppIcon(
        iconName: "Cut the rope",
        iconId: 3,
        iconPath: "assets/cut-the-rope.png"),
    AppIcon(iconName: "Note", iconId: 4, iconPath: "assets/note.png"),
    AppIcon(iconName: "Pop Clip", iconId: 5, iconPath: "assets/popclip.png"),
    AppIcon(iconName: "Prompt 3", iconId: 6, iconPath: "assets/prompt-3.png")
  ];

  int? _hoveredIndex;
  int? _draggedIndex;
  AppIcon? _selectedIcon;
  AppIcon? _draggedIcon;
  double _iconSize = 60;

  // Getters...
  bool get isHovering => _hoveredIndex != null;
  bool get isHoveringWhileDragging =>
      hoveredIndex != null && _draggedIcon != null;
  int? get hoveredIndex => _hoveredIndex;
  int? get draggedIndex => _draggedIndex;
  AppIcon? get selectedIcon => _selectedIcon;
  double get iconSize => _iconSize;
  int get totalIcons => _icons.isEmpty ? 1 : _icons.length;

  // Setters...
  /// Update [ _iconSize ]
  set updateIconSize(double size) {
    if (_iconSize != size) _iconSize = size * 0.5 / totalIcons + 2;
  }

  /// Update [ _selectedIcon ],
  set selectIcon(AppIcon? icon) {
    if (_selectedIcon != icon) {
      _selectedIcon = icon;
      notifyListeners();
    }
  }

  /// Methods that handles the [ Mouse_Hover_Events ]
  /// [ onHoverUpdateIcon ]  is called when Mouse enters the [ icon ] area.
  /// And swaps the [ draggedIcon ] with the icon mouse is hovering at.
  ///  [ onHoverExit ] is called when Mouse exit the [ icon ] area

  void onHoverUpdateIcon(int newIndex) {
        _hoveredIndex = newIndex;
    if (_draggedIndex != null && _draggedIndex != newIndex) {
      if (draggedIndex! < newIndex) {
        for (int i = draggedIndex!; i < newIndex; ++i) {
          AppIcon? icon = _icons[i + 1];
          _icons.updateAppIcon(i, icon);
        }
      } else {
        for (int i = draggedIndex!; i > newIndex; --i) {
          AppIcon? icon = _icons[i - 1];
          _icons.updateAppIcon(i, icon);
        }
      }
      _icons.updateAppIcon(newIndex, null);
      _draggedIndex = newIndex;
    }
    notifyListeners();
  }

  void onHoverExit() {
    _hoveredIndex = null;
    notifyListeners();
  }

  /// Methods that control [Item_Drag_Events ]
  ///  [ onDragStart ] is called when an icon is  dragged. It sets the [ _draggedIcon ] as the icon that is currently being dragged.
  /// And set the current ( dragged ) icon as null.
  /// [ onDragEnd ] is called when the drag is completed and restore the current  icon ; [ _draggedIcon ].

  void onDragStart(int index) {
    _draggedIcon = _icons[index];
    _draggedIndex = index;
    _icons.updateAppIcon(index, null);
    notifyListeners();
  }

  void onDragEnd(DraggableDetails _) {
    _icons.updateAppIcon(_draggedIndex!, _draggedIcon);
    _draggedIndex = null;
    _draggedIcon = null;
    notifyListeners();
  }

  /// [ getSizeAndTransition ] mathod determines the [ scaledIconSize ] and [ translationY ]
  /// for each icon ( on the iconTray ) based on hover state.
  /// Where [ scaledIconSize ] controlls how much an icon is going to scale when hovered over the [ iconTray ] / [ icon ]
  /// And [translationY ] controlls how much an icon is going to be [ elevated ] on hovering over the [ iconTray ]

  /// [ scaledIconSize ] for hovered icon is calculated as [ iconSize * 1.6 ] .
  /// And for other icons, it is calculated between [ iconSize ] and [ iconSize * 1.3 ] based on their [ distance ]
  /// from the hovered icon.
  /// [ translationY ] for hovered icon is calculated as [ - iconSize / 4 ] .
  /// And for other icons, it is calculated between [ 0 ] and [ - iconSize /5 ].

  (double size, double translationY) getSizeAndTranslation(int index) {
    final difference = isHovering ? (_hoveredIndex! - index).abs() : 0;
    if (!isHovering) {
      return (_iconSize, 0);
    } else if (index == _hoveredIndex!) {
      return (_iconSize * 1.5, -(_iconSize / 6));
    } else if (difference <= totalIcons) {
      final ratio = (totalIcons - difference) / totalIcons;
      final size = lerpDouble(_iconSize, _iconSize * 1.3, ratio)!;
      final translationY = lerpDouble(0, -(_iconSize / 7), ratio)!;
      return (size, translationY);
    }
    return (_iconSize, 0);
  }

  /// Access the icon at some index
  AppIcon? iconAt(int index) {
    return _icons.elementAt(index);
  }
}
