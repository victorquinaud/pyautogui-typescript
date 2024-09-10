import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        x = sys.argv[1]
        y = sys.argv[2]
        pyautogui.moveTo(int(x), int(y))
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
