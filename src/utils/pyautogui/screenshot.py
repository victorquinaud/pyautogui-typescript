import sys
import pyautogui
import json

if __name__ == "__main__":
    screenshot = pyautogui.screenshot()
    pathToSave = sys.argv[1]
    screenshot.save(pathToSave)
    print(json.dumps(pathToSave))
else:
    sys.exit(1)
