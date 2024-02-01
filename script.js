body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black; /* Change to black */
}

.front {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    transform: rotateY(0deg);
    transition: transform 0.5s ease;
    font-size: 20px
}

.container {
  position: relative;
  display: inline-block;
}

.envelope {
  position: absolute;
  top: calc(10% + 150px); /* Move the envelope down by 10 pixels */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px; /* Reduced envelope size for better visibility on a phone */
  height: 170px; /* Reduced envelope size for better visibility on a phone */
  background-color: #ff5858;
  border-radius: 6px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2; /* Adjusted z-index to ensure it's above the letter */
  transition: top 0.8s ease-in-out, opacity 0.5s ease-in-out, transform 0.3s ease-in-out; ; /* Added opacity transition */
  
}

.envelope:hover {
  top: 10%;
  transform: translate(-50%, -50%) scale(1.1);
}

.container.clicked .envelope:hover {
  transform: translate(-50%, -50%); /* Remove the scaling effect when clicked */
}

.container.clicked .envelope {
  top: calc(50% + 60px);
  opacity: 0;
}  
.flap {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 50px; /* Reduced flap size for better visibility on a phone */
  border-top: 50px solid white; /* Reduced flap size for better visibility on a phone */
  border-left: 150px solid transparent; /* Reduced flap size for better visibility on a phone */
  border-right: 150px solid transparent; /* Reduced flap size for better visibility on a phone */
  z-index: 1;
  transition: top 0.8s ease-in-out; /* Adjusted transition duration */
}

.letter {
  position: absolute;
  top: 50%; /* Adjusted top position to be centered within the envelope */
  left: 50%;
  transform: translate(-50%, -50%) scaleY(0) translateY(-40px); /* Adjusted translateY to move the letter up */
  transform-origin: bottom; /* Set the transform origin to the bottom */
  width: 300px; /* Reduced letter size for better visibility on a phone */
  height: 400px; /* Reduced letter size for better visibility on a phone */
  background-color: white;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Adjusted z-index to ensure it's below the envelope */
  transition: transform 0.8s ease-in-out; /* Adjusted transition duration */
  
  font-size: 10px;
  padding: 5px;
  font-style: Comic sans;
}

.envelope:hover {
  top: 50%; /* Ensure the envelope stays centered on hover */
}

.container.clicked .envelope {
  top: calc(50% + 60px); /* Move the envelope downward */
  opacity: 0; /* Set opacity to 0 after the envelope goes down */
}

.container.clicked .flap {
  top: -24px; /* Move the flap upward */
}

.container.clicked .letter {
  transform: translate(-50%, -50%) scaleY(1) translateY(0); /* Expand the letter downward with no additional translateY */
  z-index: 3; /* Set z-index to make sure the letter appears above the flap */
}

