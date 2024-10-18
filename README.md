# Flutter Dock Application

This Flutter application implements a customizable dock that allows users to interact with icons through hover and drag-and-drop features. Each icon can be selected, dragged, and reordered within the dock, providing a dynamic user experience.

## Features

- **Dynamic Icon Dock**: Displays a list of icons that can be hovered over and clicked.
- **Drag and Drop**: Icons can be dragged to reorder them within the dock.
- **Hover Effects**: Icons scale up and elevate when hovered over, enhancing user interaction.
- **Background Change**: The background image changes based on the selected icon.

## Getting Started

### Prerequisites

- Flutter SDK
- Dart SDK
- An IDE such as Visual Studio Code or Android Studio

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flutter-dock.git
   cd flutter-dock
   ````

2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Ensure the asset images for the icons are placed in the assets directory. Update your pubspec.yaml to include:
   ```bash
   flutter:
     assets:
       - assets/astro.png
       - assets/brewer-x.png
       - assets/cut-the-rope.png
       - assets/note.png
       - assets/popclip.png
       - assets/prompt-3.png
   ```

4. Run the application:
   ```bash
   flutter run
   ```
