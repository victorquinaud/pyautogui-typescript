import sys
import json
import pyautogui

if __name__ == "__main__":
    try:
        width, height = pyautogui.size()
        print(json.dumps([width, height]))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
