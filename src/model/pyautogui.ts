import { execFile, ExecFileOptions } from "child_process"
import { resolve } from "path"

enum KeyboarKeys {
  "zero" = "0",
  "one" = "1",
  "two" = "2",
  "three" = "3",
  "four" = "4",
  "five" = "5",
  "six" = "6",
  "seven" = "7",
  "eight" = "8",
  "nine" = "9",
  "\t" = "\t",
  "\n" = "\n",
  "\r" = "\r",
  " " = " ",
  "!" = "!",
  '"' = '"',
  "#" = "#",
  "$" = "$",
  "%" = "%",
  "&" = "&",
  "'" = "'",
  "(" = "(",
  ")" = ")",
  "*" = "*",
  "+" = "+",
  "," = ",",
  "-" = "-",
  "." = ".",
  "/" = "/",
  ":" = ":",
  ";" = ";",
  "<" = "<",
  "=" = "=",
  ">" = ">",
  "?" = "?",
  "@" = "@",
  "[" = "[",
  "\\" = "\\",
  "]" = "]",
  "^" = "^",
  _ = "_",
  "`" = "`",
  a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f",
  g = "g",
  h = "h",
  i = "i",
  j = "j",
  k = "k",
  l = "l",
  m = "m",
  n = "n",
  o = "o",
  p = "p",
  q = "q",
  r = "r",
  s = "s",
  t = "t",
  u = "u",
  v = "v",
  w = "w",
  x = "x",
  y = "y",
  z = "z",
  "{" = "{",
  "|" = "|",
  "}" = "}",
  "~" = "~",
  accept = "accept",
  add = "add",
  alt = "alt",
  altleft = "altleft",
  altright = "altright",
  apps = "apps",
  backspace = "backspace",
  browserback = "browserback",
  browserfavorites = "browserfavorites",
  browserforward = "browserforward",
  browserhome = "browserhome",
  browserrefresh = "browserrefresh",
  browsersearch = "browsersearch",
  browserstop = "browserstop",
  capslock = "capslock",
  clear = "clear",
  convert = "convert",
  ctrl = "ctrl",
  ctrlleft = "ctrlleft",
  ctrlright = "ctrlright",
  decimal = "decimal",
  del = "del",
  delete = "delete",
  divide = "divide",
  down = "down",
  end = "end",
  enter = "enter",
  esc = "esc",
  escape = "escape",
  execute = "execute",
  f1 = "f1",
  f10 = "f10",
  f11 = "f11",
  f12 = "f12",
  f13 = "f13",
  f14 = "f14",
  f15 = "f15",
  f16 = "f16",
  f17 = "f17",
  f18 = "f18",
  f19 = "f19",
  f2 = "f2",
  f20 = "f20",
  f21 = "f21",
  f22 = "f22",
  f23 = "f23",
  f24 = "f24",
  f3 = "f3",
  f4 = "f4",
  f5 = "f5",
  f6 = "f6",
  f7 = "f7",
  f8 = "f8",
  f9 = "f9",
  final = "final",
  fn = "fn",
  hanguel = "hanguel",
  hangul = "hangul",
  hanja = "hanja",
  help = "help",
  home = "home",
  insert = "insert",
  junja = "junja",
  kana = "kana",
  kanji = "kanji",
  launchapp1 = "launchapp1",
  launchapp2 = "launchapp2",
  launchmail = "launchmail",
  launchmediaselect = "launchmediaselect",
  left = "left",
  modechange = "modechange",
  multiply = "multiply",
  nexttrack = "nexttrack",
  nonconvert = "nonconvert",
  num0 = "num0",
  num1 = "num1",
  num2 = "num2",
  num3 = "num3",
  num4 = "num4",
  num5 = "num5",
  num6 = "num6",
  num7 = "num7",
  num8 = "num8",
  num9 = "num9",
  numlock = "numlock",
  pagedown = "pagedown",
  pageup = "pageup",
  pause = "pause",
  pgdn = "pgdn",
  pgup = "pgup",
  playpause = "playpause",
  prevtrack = "prevtrack",
  print = "print",
  printscreen = "printscreen",
  prntscrn = "prntscrn",
  prtsc = "prtsc",
  prtscr = "prtscr",
  return = "return",
  right = "right",
  scrolllock = "scrolllock",
  select = "select",
  separator = "separator",
  shift = "shift",
  shiftleft = "shiftleft",
  shiftright = "shiftright",
  sleep = "sleep",
  space = "space",
  stop = "stop",
  subtract = "subtract",
  tab = "tab",
  up = "up",
  volumedown = "volumedown",
  volumemute = "volumemute",
  volumeup = "volumeup",
  win = "win",
  winleft = "winleft",
  winright = "winright",
  yen = "yen",
  command = "command",
  option = "option",
  optionleft = "optionleft",
  optionright = "optionright",
}

enum MoveTween {
  easeInQuad = "easeInQuad",
  easeOutQuad = "easeOutQuad",
  easeInOutQuad = "easeInOutQuad",
  easeInBounce = "easeInBounce",
  easeInElastic = "easeInElastic",
}

enum ClickButtons {
  left = "left",
  right = "right",
  middle = "middle",
}

enum Scripts {
  screenSize = "screensize.py",
  screenshot = "screenshot.py",
  locateCenterOnScreen = "locateCenterOnScreen.py",
  moveTo = "moveTo.py",
  write = "write.py",
  onScreen = "onScreen.py",
  locateOnScreen = "locateOnScreen.py",
  locateAllOnScreen = "locateAllOnScreen.py",
  position = "position.py",
  moveRel = "moveRel.py",
  click = "click.py",
  dragRel = "dragRel.py",
  dragTo = "dragTo.py",
  scroll = "scroll.py",
  hScroll = "hScroll.py",
  press = "press.py",
  hotkey = "hotkey.py",
  alert = "alert.py",
  confirm = "confirm.py",
  prompt = "prompt.py",
}

export default class pyautogui {
  constructor(
    readonly projectPath: string = __dirname,
    readonly scriptPath: string = "../utils/pyautogui",
    readonly imagesPath: string = "../utils/images",
    readonly screenshotsPath: string = "../screenshots"
  ) {}

  async resolveEnv(literals: any, ...placeholders: string[]): Promise<string> {
    let env = {} as any

    try {
      const windowsEnv = await this.exec({ command: "cmd.exe", args: ["/c", "set"] })

      const windowsEnvObject = windowsEnv.split("\n").reduce((final: any, line: string) => {
        line = line.trim()

        if (line && !line.includes("\r")) {
          const [key, value] = line.split("=")
          if (key && value) return { ...final, [key.toUpperCase()]: value }
        }
        return final
      }, {} as any)

      env = { ...env, ...windowsEnvObject }
    } catch (error) {
      console.error(error)
    }

    env = { ...env, ...process.env }

    let fullPath = literals.reduce(
      (acc: any, str: string, i: number) => acc + str + (placeholders[i] || ""),
      ""
    )

    fullPath = fullPath.replace(/%([^%]+)%/g, (_: any, variable: string) => {
      return env[variable.toUpperCase()] || `%${variable}%`
    })

    return fullPath
  }

  private async exec({
    command,
    script,
    args = [],
  }: {
    command?: string
    script?: Scripts
    args?: string[]
  }): Promise<any> {
    const options: ExecFileOptions = {
      cwd: resolve(__dirname, this.scriptPath),
      env: {
        ...process.env,
        NODE_ENV: "production",
      },
    }

    return new Promise((resolve, reject) => {
      execFile(command ?? "python", [script!, ...args!], options, (err, stdout, stderr) => {
        if (err) reject(`Error executing script: ${err.message}`)
        if (stderr) reject(`Script error: ${stderr}`)

        try {
          const result = JSON.parse(stdout.trim()) ?? false
          resolve(result)
        } catch (error: any) {
          if (error.message.includes("is not valid JSON")) resolve(stdout)
          reject(`Error parsing JSON: ${error.message}`)
        }
      })
    })
  }

  async routine(routine?: Promise<any>[]): Promise<void> {
    try {
      // const screenSize = await this.screenSize()
      // console.log(screenSize)
      // const screenshot = await this.screenshot("file.png", "%userprofile%\\desktop")
      // console.log(screenshot)
      // const onScreen = await this.onScreen(100, 100)
      // console.log(onScreen)
      // const locateOnScreen = await this.locateOnScreen("excel.png", true)
      // console.log(locateOnScreen)
      // const locateCenterOnScreen = await this.locateCenterOnScreen("excel.png")
      // console.log(locateCenterOnScreen)
      // const position = await this.position()
      // console.log(position)
      // const moveRel = await this.moveRel(100, 100)
      // console.log(moveRel)
      // const moveTo = await this.moveTo(100, 100)
      // console.log(moveTo)
      // const click = await this.click(100, 100, 1, 0.25, ClickButtons.right)
      // console.log(click)
      // const dragRel = await this.drag(300, 300, true, 3.0, ClickButtons.left, MoveTween.easeInBounce)
      // console.log(dragRel)
      // const scroll = await this.scroll(1)
      // console.log(scroll)
      // const hScroll = await this.scroll(-1, true)
      // console.log(hScroll)
      // const write = await this.write("Victor", 1.0)
      // console.log(write)
      // const press = await this.press(KeyboarKeys.winleft, 2, 0.5)
      // console.log(press)
      // const hotkey = await this.hotkey([KeyboarKeys.ctrlleft, KeyboarKeys.v], 0.3)
      // console.log(hotkey)
      // const alert = await this.alert("Alert Text", "Alert Title", "Alert Button")
      // console.log(alert)
      // const confirm = await this.confirm("Confirm Text", "Confirm Title", ["Confirm Button A", "Confirm Button B"])
      // console.log(confirm)
      // const prompt = await this.prompt("Prompt Text", "Prompt Title", "Prompt Default Value")
      // console.log(prompt)
    } catch (error) {
      console.error(error)
    }

    //  if ((routine.length ?? -1) < 0) throw new Error("Routine espected")

    //   routine.forEach(async (r) => {
    //     const result = await r.
    //   })
  }

  // screen
  screenSize(): Promise<[number, number]> {
    return this.exec({ script: Scripts.screenSize })
  }

  async screenshot(
    fileName: string = "screenshot.png",
    path: string = this.screenshotsPath
  ): Promise<string> {
    const pathToSave = resolve(await this.resolveEnv`${path}`, fileName)
    return this.exec({ script: Scripts.screenshot, args: [pathToSave] })
  }

  onScreen(x: number, y: number): Promise<boolean> {
    return this.exec({ script: Scripts.onScreen, args: [x.toString(), y.toString()] })
  }

  locateOnScreen(
    image: string,
    all: boolean = false
  ): Promise<[number, number, number, number] | [number, number, number, number][]> {
    const path = resolve(this.projectPath, this.imagesPath, image)

    if (all) return this.exec({ script: Scripts.locateAllOnScreen, args: [path] })
    return this.exec({ script: Scripts.locateOnScreen, args: [path] })
  }

  locateCenterOnScreen(image: string) {
    const path = resolve(this.projectPath, this.imagesPath, image)
    return this.exec({ script: Scripts.locateCenterOnScreen, args: [path] })
  }

  // mouse
  position(): Promise<[number, number]> {
    return this.exec({ script: Scripts.position })
  }

  moveRel(x: number, y: number): Promise<boolean> {
    return this.exec({ script: Scripts.moveRel, args: [x.toString(), y.toString()] })
  }

  moveTo(x: number, y: number): Promise<boolean> {
    return this.exec({ script: Scripts.moveTo, args: [x.toString(), y.toString()] })
  }

  click(
    x: number,
    y: number,
    clicks: number = 1,
    interval: number = 0.25,
    button: ClickButtons = ClickButtons.left
  ): Promise<boolean> {
    return this.exec({
      script: Scripts.click,
      args: [x.toString(), y.toString(), clicks.toString(), interval.toString(), button],
    })
  }

  drag(
    x: number,
    y: number,
    relative: boolean = true,
    duration: number = 2.0,
    button: ClickButtons = ClickButtons.left,
    tween: MoveTween = MoveTween.easeOutQuad
  ): Promise<boolean> {
    if (relative)
      return this.exec({
        script: Scripts.dragRel,
        args: [x.toString(), y.toString(), duration.toString(), tween, button],
      })
    return this.exec({
      script: Scripts.dragTo,
      args: [x.toString(), y.toString(), duration.toString(), tween, button],
    })
  }

  scroll(amount: number = 1, horizontal: boolean = false): Promise<boolean> {
    if (horizontal) return this.exec({ script: Scripts.hScroll, args: [amount.toString()] })
    return this.exec({ script: Scripts.scroll, args: [amount.toString()] })
  }

  write(text: string, interval: number = 0.25): Promise<boolean> {
    return this.exec({ script: Scripts.write, args: [text, interval.toString()] })
  }

  press(
    key: KeyboarKeys = KeyboarKeys.winleft,
    presses: number = 1,
    interval: number = 0.25
  ): Promise<boolean> {
    return this.exec({
      script: Scripts.press,
      args: [key, presses.toString(), interval.toString()],
    })
  }

  hotkey(keys: KeyboarKeys[], interval: number = 0.25): Promise<boolean> {
    return this.exec({ script: Scripts.hotkey, args: [JSON.stringify(keys), interval.toString()] })
  }

  // message
  alert(text: string, title: string = "Warning", button: string = "Ok"): Promise<boolean> {
    return this.exec({ script: Scripts.alert, args: [text, title, button] })
  }

  confirm(
    text: string,
    title: string = "Warning",
    buttons: string[] = ["Ok", "Cancel"]
  ): Promise<boolean> {
    return this.exec({ script: Scripts.confirm, args: [text, title, JSON.stringify(buttons)] })
  }

  prompt(text: string, title: string = "Warming", defaultValue: string = ""): Promise<boolean> {
    return this.exec({ script: Scripts.prompt, args: [text, title, defaultValue] })
  }
}
