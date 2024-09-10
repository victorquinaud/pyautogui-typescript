import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        x = sys.argv[1]
        y = sys.argv[2]
        clicks = sys.argv[3]
        interval = sys.argv[4]
        button = sys.argv[5]

        pyautogui.click(int(x), int(y), int(clicks), float(interval), button)
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
