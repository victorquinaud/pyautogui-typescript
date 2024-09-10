import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        text = sys.argv[1]
        title = sys.argv[2]
        button = sys.argv[3]
        result = pyautogui.alert(text, title, button)
        print(json.dumps(result))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
