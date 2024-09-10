import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        keys = json.loads(sys.argv[1])
        keysList = list(keys)
        interval = sys.argv[2]

        pyautogui.hotkey(*keysList, interval=float(interval))
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
