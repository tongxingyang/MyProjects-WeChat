cmd /k "md %cd%\root && for %%i in (*.wxapkg) do node D:\wxappUnpacker\wxappUnpacker-master\wuWxapkg.js %cd%\%%i & xcopy %%~ni %cd%\root\ /e" 
