import sys
import pyautogui
import json

if __name__ == "__main__":
    try:
        image = sys.argv[1]
        locate = pyautogui.locateCenterOnScreen(image)
        print(json.dumps(locate))
    except:
        print(json.dumps(False))
        

else:
    sys.exit(1)
