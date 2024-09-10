import sys
import pyautogui
import json

if __name__ == "__main__":
    x = sys.argv[1]
    y = sys.argv[2]
    result = pyautogui.onScreen(int(x), int(y))
    print(json.dumps(result))
else:
    sys.exit(1)
