#!/bin/bash

echo "Starting Backend..."
cd backend
source venv/bin/activate
python3 app.py &

echo "Starting Frontend..."
cd ../frontend
npm run dev
