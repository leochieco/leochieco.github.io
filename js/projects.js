const projects = [
  
   {
    id: "4_20ma",
    title: "Tutorial Current Loop 4-20mA",
    description_brief: "Bridging theory and practice in industrial electronics, this tutorial dives into the 4–20mA current loop, a classic standard often taken for granted. Learn why it still matters, how it works electronically, and key design principles for robust, efficient implementations. Follow along as we design a didactic transmitter and simulate it in LTSpice, exploring its behavior under real operating conditions and uncovering the strengths and limits of this technology.",
    description: "This tutorial was created to bridge the gap between theory and practice in industrial electronics, focusing on the 4–20 mA current loop, a widely used standard often taken for granted. Its goal is to explain why it is still relevant, how it works electronically, and the key design principles needed for a robust and efficient implementation. The tutorial guides you through designing a didactic transmitter and simulating it with LTSpice, allowing you to analyze its behavior under different operating conditions and understand the strengths and limitations of this technology.",
    category: "Electronics",
	language: "Italian",
    difficulty: "Beginner",
	year: 2025,
	thumbnail: "assets/thumbnails/4_20ma.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/4_20ma"
  } 
 
  ,
  
   {
    id: "amp_carica",
    title: "Tutorial Amplificatori di Carica",
    description_brief: "Piezoelectric sensors enable precise and fast measurement of forces, pressures, and accelerations across engineering, industrial, and research applications. This tutorial explains how mechanical forces generate charges in the crystal, how circuit models describe sensor behavior, and how charge amplifiers convert the signal into stable voltages. Simulations in LTSpice illustrate the sensor’s response and signal processing, providing a clear understanding of key concepts.",
    description: "Piezoelectric sensors are essential instruments for measuring forces, pressures, and accelerations, thanks to their speed and precision. They are used in a wide range of fields, from engineering to scientific research, from industrial control to automotive diagnostics. However, unlike more intuitive transducers such as strain gauges or resistive sensors, their operation is not immediately obvious and requires understanding the underlying physical and electrical phenomena. This tutorial aims to provide an overview of how piezoelectric sensors work. The journey starts with the physical principles of the piezoelectric effect, showing how a mechanical force generates electric charges on the crystal surfaces, which are closely linked to its internal structure and the piezoelectric coefficients of the material. Next, circuit models are introduced to describe and simulate the transducer’s behavior, leading to the design of charge amplifiers. These are central components: they convert the small charge produced by the sensor into a proportional and stable voltage, independent of parasitic capacitances from cables and connections. To make the discussion more concrete, the tutorial includes simulations in LTSpice, demonstrating how the sensor responds to sinusoidal or impulsive signals and how the amplifier processes them. While simulation does not replace real experiments, it provides valuable support for understanding complex concepts.",
    category: "Electronics",
	language: "Italian",
    difficulty: "Beginner",
	year: 2025,
	thumbnail: "assets/thumbnails/amp_carica.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/Amplificatore%20di%20carica"
  }   
 
  ,
  
   {
    id: "brushless",
    title: "Tutorial Brushless Motors",
    description_brief: "The BLDC motor powers everything from e-bikes to laptops, offering precision, efficiency, and reliability far beyond traditional brushed motors. Unlike brushed motors, it relies on electronic commutation controlled by embedded systems. This guide breaks down BLDC fundamentals, control strategies, and ESC architecture in a clear, practical way, no heavy math required.",
    description: "The Brushless DC (BLDC) motor has transformed electromechanical applications, offering superior precision, energy efficiency, and reliability compared to traditional brushed motors. Today, BLDC motors power a wide range of technologies, from electric vehicles and laptops to e-bikes and personal mobility devices—often in ways that go unnoticed. Unlike brushed motors, BLDC motors require electronic commutation, relying on embedded control systems to energize the correct windings based on rotor position. This guide explains the fundamentals of BLDC operation, sensorless and sensored control, commutation strategies, and ESC architecture. Designed for engineers, hobbyists, and curious learners, it emphasizes clarity and practical understanding over complex mathematics.",
    category: "Electronics",
	language: "English",
    difficulty: "Beginner",
	year: 2025,
	thumbnail: "assets/thumbnails/brushless.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/Brushless"
  }   
 
  ,
  
   {
    id: "kalman",
    title: "Tutorial Kalman filter",
    description_brief: "The Kalman filter is a cornerstone of modern technology, from space engineering to robotics, finance, and AI. Often seen as complex, this tutorial makes it accessible and clear, combining rigor with simplicity for readers familiar with basic statistics and linear algebra. Carefully organized notes and examples help demystify this powerful tool.",
    description: "In modern technology, the Kalman filter plays a central role in many applications, ranging from space engineering to robotics, finance, and artificial intelligence. Despite its wide use and importance, the Kalman filter is often seen as a difficult topic, reserved for experts. The goal of this tutorial is to provide an introductory and accessible overview, combining rigor with clarity. It is intended for readers who have a basic understanding of statistics and linear algebra. This article brings together notes collected from books and online resources, reviewed and organized to make the subject clearer and easier to understand",
    category: "Electronics, Automatic Control",
	language: "English, Italian",
    difficulty: "Advanced",
	year: 2025,
	thumbnail: "assets/thumbnails/kalman.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/Kalman"
  }   
 
  ,
  
   {
    id: "MPPT",
    title: "Tutorial Photovoltaic MPPT (Maximum Power Point Tracking)",
    description_brief: "Sensor fusion enables smart electronics to see and react to the world. By combining noisy, imperfect data from multiple sensors, systems like drones, smartphones, and camera gimbals achieve precise motion and orientation tracking. This tutorial dives into sensor types, fusion techniques, and how accelerometers and gyroscopes can be integrated using the Kalman filter.",
    description: "In recent years, sensor fusion has become a key technology for building intelligent electronic systems capable of perceiving, interpreting, and reacting to the world around them. Behind familiar applications—such as drone stabilization, motion tracking in smartphones, or the precision of camera gimbals—lies a complex integration of multiple sensors. No single sensor can provide perfect measurements: each comes with intrinsic limitations, systematic errors, noise, and drift over time. Sensor fusion overcomes these issues by combining data from multiple sources, leveraging the strengths of each device to compensate for weaknesses. To fully understand sensor fusion techniques, we start by classifying the sensors available on the market to understand their roles in complex systems. Then, we examine the most common fusion methods, focusing on two key players in motion and orientation measurement: MEMS accelerometers and gyroscopes. Finally, we explore how these data sources can be fused using the Kalman filter.",
    category: "Electronics, Automatic Control",
	language: "Italian, English",
    difficulty: "Advanced",
	year: 2025,
	thumbnail: "assets/thumbnails/mppt.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/MPPT"
  }  
 
  ,
  
   {
    id: "SENSOR_FUSION",
    title: "Tutorial Sensor Fusion with Kalman filter",
    description_brief: "Sensor fusion enables smart electronics to see and react to the world. By combining noisy, imperfect data from multiple sensors, systems like drones, smartphones, and camera gimbals achieve precise motion and orientation tracking. This tutorial dives into sensor types, fusion techniques, and how accelerometers and gyroscopes can be integrated using the Kalman filter.",
    description: "In recent years, sensor fusion has become a key technology for building intelligent electronic systems capable of perceiving, interpreting, and reacting to the world around them. Behind familiar applications—such as drone stabilization, motion tracking in smartphones, or the precision of camera gimbals—lies a complex integration of multiple sensors. No single sensor can provide perfect measurements: each comes with intrinsic limitations, systematic errors, noise, and drift over time. Sensor fusion overcomes these issues by combining data from multiple sources, leveraging the strengths of each device to compensate for weaknesses. To fully understand sensor fusion techniques, we start by classifying the sensors available on the market to understand their roles in complex systems. Then, we examine the most common fusion methods, focusing on two key players in motion and orientation measurement: MEMS accelerometers and gyroscopes. Finally, we explore how these data sources can be fused using the Kalman filter.",
    category: "Electronics, Automatic Control",
	language: "Italian",
    difficulty: "Advanced",
	year: 2025,
	thumbnail: "assets/thumbnails/sensor_fusion.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/SensorFusion"
  }  
 
  ,
  
   {
    id: "Sensor Tester",
    title: "Tutorial: How to build an industrial sensors teste",
    description_brief: "This article shows how to build a modular, battery-powered NPN/PNP sensor tester with LED feedback, current protection, and a battery status indicator. Using LTSpice simulations, the design ensures reliable, immediate verification of sensor functionality, perfect for hobbyists, educators, and professionals alike.",
    description: "This article presents the complete design of a tester for industrial NPN and PNP sensors, powered by two 9V batteries and equipped with both protection features and battery status monitoring. The device was created to meet the common need—in hobbyist, educational, and professional settings—for a simple and reliable tool that allows immediate verification of sensor functionality. The proposed circuit is modular and divided into three main sections:\n1) The tester itself, which identifies the sensor type and indicates activation via an LED.\n2) A current limiter, designed to protect both the sensor and the tester from short circuits or wiring errors.\n3) A battery status indicator, based on a simple transistor stage with a Zener diode, allowing the user to know when the supply voltage drops below the operational threshold.\nDuring the design phase, various LTSpice simulations were used to accurately evaluate the circuit’s behavior under different operating conditions.",
    category: "Electronics, Automatic Control",
	language: "Italian",
    difficulty: "Beginner",
	year: 2025,
	thumbnail: "assets/thumbnails/sensor_tester.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/SensorTester"
  }  
 
  ,
  
   {
    id: "TDR",
    title: "Tutorial Time Domain Reflectometry",
    description_brief: "Time Domain Reflectometry lets you see inside cables and transmission lines using nothing more than a fast electrical pulse. This tutorial takes you from the fundamentals of reflection and transmission lines to bounce diagrams and LTspice simulations, showing how impedance mismatches and discontinuities reveal themselves in the time domain. Through practical examples and real diagnostic scenarios, you’ll learn how to turn TDR into a powerful tool for analyzing and troubleshooting electronic and communication systems.",
    description: "Time Domain Reflectometry (TDR) is one of the most powerful and fascinating techniques for “seeing” what is normally hidden inside a cable or a transmission line. With a simple pulse or step signal, it is possible to reveal discontinuities, impedance mismatches, and variations that affect signal propagation. In this tutorial, we will take a journey starting from the theoretical foundations of transmission lines and reflection coefficients, moving on to bounce diagrams and practical simulations using LTspice. Concrete examples will be analyzed, ranging from open and short-circuited loads to more complex configurations involving multiple lines, showing how to interpret the results and use them to diagnose real-world problems. The goal is to guide the reader toward a deep understanding of TDR by connecting theory, simulation, and experimental insight, enabling its use as a powerful analysis and design tool in electronics, telecommunications, and system diagnostics.",
    category: "Electronics, Transmission Lines",
	language: "Italian",
    difficulty: "Intermediate",
	year: 2025,
	thumbnail: "assets/thumbnails/tdr.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/TDR"
  }      
  
  ,
  
   {
    id: "TEC",
    title: "Peltier cells",
    description_brief: "Peltier cells can generate hot and cold surfaces with nothing more than a power supply—but what’s really happening inside? This tutorial breaks down the physics behind thermoelectric cooling and shows how to model and simulate a Peltier cell in SPICE, including its behavior under thermal disturbances and PI/PID control. A clear, hands-on guide to turning thermoelectric theory into practical electronic design.",
    description: "Have you ever seen those small white modules, about the size of a coin, capable of producing cold on one side and heat on the other simply by connecting them to a battery? These are Peltier cells, thermoelectric devices that directly convert electrical energy into a temperature gradient. You can find them in camping mini-fridges, electronic cooling systems, and even portable medical devices. But how do they really work? What is the physics behind this effect? And, most importantly, how can they be modeled and simulated to integrate them into an electronic project using PI or PID controllers? In this tutorial, I will guide you step by step: starting from the basic principles, we will build a SPICE model to understand how a Peltier cell behaves when subjected to thermal disturbances or driven by an electronic controller. In the end, you’ll discover that behind this “pocket refrigerator” there is no magic—only an elegant combination of physics, electronics, and control theory.",
    category: "Electronics",
	language: "Italian",
    difficulty: "Beginner",
	year: 2025,
	thumbnail: "assets/thumbnails/TEC.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/TEC"
  }   
 
  ,
  
   {
    id: "HT_TRANSFORMERS",
    title: "Electromagnetic Fundamentals and Design of High-Frequency Transformers for Switching Converters",
    description_brief: "A practical tutorial on high-frequency transformers for switching power supplies. Starting from the basics of electromagnetism, it guides you through HF transformer theory and design, with examples for flyback and push-pull converters.",
    description: "This comprehensive tutorial is designed for students, makers, and electronics enthusiasts interested in designing high-frequency transformers for switching power supplies. It starts from the fundamentals of electromagnetism, covering key concepts such as:<BR>flux density and number of turns<BR>core losses<BR>skin effect<BR>wire selection and practical construction tips<BR>The tutorial also includes practical design examples for common topologies like flyback and push-pull converters, providing a step-by-step approach that connects theory to practice.<BR>The tutorial is available in both Italian and English, ready to be explored, downloaded, or improved by the community.",
    category: "Electronics, Power Converters",
	language: "Italian, English",
    difficulty: "Intermediate",
	year: 2026,
	thumbnail: "assets/thumbnails/HT_transformers.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/HF_Transformers"
  }     
 

  
];


const _template_ = [

    {
    id: "example-project",
    title: "Example Project",
	description_brief: "Sample electronics project",
    description: "Sample electronics project",
    category: "electronics",
    difficulty: "Beginner",
    language: "Arduino / C++",
    extra: {
      board: "Arduino Uno",
      topic: "Current loop 4–20mA",
      year: 2026
    },
    thumbnail: "assets/thumbnails/example.png",
    github: "https://github.com/username/example-project"
  }
  
    ,
  
   {
    id: "xxxxx",
    title: "Tutorial Sensor Fusion with Kalman filter",
    description_brief: " ",
    description: "  ",
    category: "Photovoltaic",
	language: "English, Italian",
    difficulty: "Advanced",
	year: 2025,
	thumbnail: "assets/thumbnails/kalman.png",
    github: "https://github.com/leochieco/Tutorials/tree/main/SensorFusion"
  }   
  
  
  
];