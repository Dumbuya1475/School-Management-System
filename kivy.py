from tkinter import*

def donothing():
    filewine = Toplevel(root)
    button = button(filewine, text="Dohing button")
    button.pack()

root = Tk()
menuBar = Menu(root)
fileMenu = Menu(menuBar, tearoff=0)
fileMenu.add_command(label="Play Game", command=donothing)
fileMenu.add_command(label="Do business", command=donothing)

fileMenu.add_separator()

fileMenu.add_command(label="Exit", command=root.quit)
root.config(menu = menuBar)
root.mainloop()