# WebEdu

## Project Overview

WebEdu is an innovative platform developed during the GreatUniHack 2023 hackathon, organized by UniCS Manchester. Our project, WebEdu, aims to enhance education in primary/middle schools by providing a comprehensive platform featuring engaging general knowledge quizzes. Utilizing the powerful combination of React.js, Flask, and MongoDB Atlas, our team, comprising Vishwas, Yin, Kian, and Artem, worked relentlessly to create an interactive and educational experience for students.

## Requirements

- Python 3.x

## Installation

1. **Clone the repository to your local machine:**

   ```
   git clone https://github.com/kianjdavis/GUH-2023.git
   cd GHU-2023
   ```

2. **Create Virtual Environment:**

   ```
   python -m venv env
   ```
   
   - macOS: `source env/bin/activate`
   - Windows: `.\env\Scripts\activate` (For Windows, you might need to run PowerShell as administrator. If execution policy is restricted, use `Set-ExecutionPolicy RemoteSigned`, then confirm with `Y`.)

3. **Install the required Python packages:**

   ```
   pip install -r requirements.txt
   ```

4. **Run Flask server:**

   ```
   flask run
   ```

5. **Navigate to `GUH_2023/view/webedu/` to set up the ReactJS app:**

   ```
   npm install
   npm install react-scripts
   ```

6. **Start the ReactJS app:**

   ```
   npm start
   ```