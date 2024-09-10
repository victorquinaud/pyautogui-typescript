import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        x = sys.argv[1]
        y = sys.argv[2]
        duration = sys.argv[3]
        tween = getattr(pyautogui, sys.argv[4], "easeOutQuad") 
        button = sys.argv[5]

        pyautogui.dragRel(int(x), int(y), float(duration), tween, button)
        print(json.dumps(True))
    except:
        print(json.dumps(False))
else:
    sys.exit(1)
