mkdir goal
copy src\*.ts goal
copy makecode\*.ts_ goal\*.ts
"c:\Program Files\Git\bin\sh.exe" make.sh
move /y goal\* ..\Tetris
rd /s/q goal