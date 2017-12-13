import <%= packageName %>

def main():
    cli = <%= packageName %>.cli.CLI()
    cli.cmdloop()


if __name__ == '__main__':
    main()
