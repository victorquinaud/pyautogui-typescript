import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        result = pyautogui.position()
        print(json.dumps(result))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
