import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        text = sys.argv[1]
        interval = sys.argv[2]
        pyautogui.write(text, float(interval))
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
