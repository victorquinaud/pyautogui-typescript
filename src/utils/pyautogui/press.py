import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        key = sys.argv[1]
        presses = sys.argv[2]
        interval = sys.argv[3]
        pyautogui.press(key, int(presses), float(interval))
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
