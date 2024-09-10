import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        image = sys.argv[1]
        result = pyautogui.locateOnScreen(image)
        print(json.dumps(result))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
