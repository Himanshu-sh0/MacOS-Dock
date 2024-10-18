class AppIcon {
  final int iconId;
  final String iconName;
  final String iconPath;

  AppIcon(
      {required this.iconId, required this.iconName, required this.iconPath});

  /// Update the [ == ] operator, for object comparison.
  @override
  bool operator ==(Object other) {
    if (identical(this, other)) return true;
    return other is AppIcon &&
        other.iconId == iconId &&
        other.iconName == iconName &&
        other.iconPath == iconPath;
  }

  /// Update the [ hashCode ] of the object
  /// Dart use [ hashCode ] to compare the objects, iinternally.
  /// Specially, when dealing with hash objects like, [Map ] or [ Set ].
  @override
  int get hashCode => iconId.hashCode ^ iconName.hashCode ^ iconPath.hashCode;
}

/// An extension on a list of type List<AppIcon?> to update an Icon in the list.
/// Or, fetch an item with a specific itemID
extension AppIconExtension on List<AppIcon?> {
  AppIcon? getAppIconByID(int id) {
    return firstWhere(
      (appIcon) => appIcon?.iconId == id,
      orElse: () => null,
    );
  }

  void updateAppIcon(int index, AppIcon? icon) {
    if (index >= 0 && index < length) {
      this[index] = icon;
    } else {
      throw RangeError("No appIcon exist at Index:$index.");
    }
  }
}
