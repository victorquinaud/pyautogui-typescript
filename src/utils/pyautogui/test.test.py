import pyautogui
x = 10
y = 10

# general
pause = pyautogui.PAUSE = 2.5
abort = pyautogui.FAILSAFE = True

# screen
width, height = pyautogui.size()
image = pyautogui.screenshot("filename.png")
isMouseOnScreen = pyautogui.onScreen()
pyautogui.locateOnScreen(image)
pyautogui.locateAllOnScreen(image)
pyautogui.locateCenterOnScreen(image)

# mouse
currentMouseX, currentMouseY = pyautogui.position()
pyautogui.moveRel(x, y, duration=0.5)
pyautogui.moveTo(x, y)
pyautogui.click(image)
pyautogui.dragTo(x, y, duration=0.5)
pyautogui.dragRel(x, y, duration=0.5)
pyautogui.leftClick(x, y)
pyautogui.rightClick(x, y)
pyautogui.middleClick(x, y)
pyautogui.doubleClick(x, y)
pyautogui.tripleClick(x, y)
pyautogui.mouseDown(x=x, y=y, button='left')
pyautogui.mouseUp(x=x, y=y, button='left')
pyautogui.scroll()
pyautogui.hscroll()

# keyboard
pyautogui.write("text", 0.25)
pyautogui.typewrite('Hello world!\n', interval=0.5)
pyautogui.press("enter")
pyautogui.keyDown("enter")
pyautogui.keyUp("enter")
pyautogui.hotkey('ctrl', 'c')

with pyautogui.hold('shift'):
    pyautogui.press(['left', 'left', 'left', 'left'])

# alert
pyautogui.alert('This is the message to display.')
confirm = pyautogui.confirm('This displays text and has an OK and Cancel button.')
pyautogui.prompt('This lets the user type in a string and press OK.')
