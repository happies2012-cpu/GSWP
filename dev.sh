#!/bin/bash
echo "Starting FastAPI Backend on 8000..."
cd api && uvicorn index:app --reload --port 8000 &
PID_BACKEND=$!
echo "Starting Vite Frontend..."
cd .. && npm run dev &
PID_FRONTEND=$!

trap "kill $PID_BACKEND $PID_FRONTEND" EXIT
wait
