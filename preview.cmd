@echo off
setlocal
cd /d "%~dp0"

rem Prefer Node.js on PATH, then use the runtime bundled with Codex.
set "PREVIEW_NODE="
for /f "delims=" %%N in ('where node.exe 2^>nul') do if not defined PREVIEW_NODE set "PREVIEW_NODE=%%N"
if not defined PREVIEW_NODE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "PREVIEW_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not defined PREVIEW_NODE if exist "%ProgramFiles%\nodejs\node.exe" set "PREVIEW_NODE=%ProgramFiles%\nodejs\node.exe"

if not defined PREVIEW_NODE (
  echo Node.js was not found. Install Node.js 18.3 or later and try again.
  echo https://nodejs.org/
  pause
  exit /b 1
)

"%PREVIEW_NODE%" scripts\serve.mjs %*
set "PREVIEW_EXIT=%ERRORLEVEL%"
if not "%PREVIEW_EXIT%"=="0" pause
exit /b %PREVIEW_EXIT%
