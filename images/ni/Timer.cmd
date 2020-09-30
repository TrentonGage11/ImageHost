@echo off
mode 32,10
rem Sets the screens Width and Height
title Timer

:start
title Enter time to countdown from.
cls
rem clears the screen
echo Enter time to countdown from.
set/p "time=>
set time=%time%
rem Asks for a time, then sets the value to time

:loop
cls
set /a time=%time%-1
if %time%==0 goto timesup
title Counting down...
echo.
echo.
echo.
echo Countdown - [%time%]
ping localhost -n 2 > nul
goto loop
rem This is the loop that runs until the time is 0

:timesup
echo Time is Up!!
rem This runs when the time is over

rem This is what closes the timer
cls
title Timer Stopped
echo Press something to close the Timer
pause > nul
exit
