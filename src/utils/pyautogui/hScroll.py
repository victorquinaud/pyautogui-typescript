import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        amount = sys.argv[1]
        pyautogui.hscroll(amount)
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
