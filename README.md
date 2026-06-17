# 🔐 Cybersecurity & IT Operations Lab – Portfolio

**Entry-Level SOC Analyst & IT Support Portfolio**

A professional, fully functional GitHub Pages portfolio demonstrating hands-on cybersecurity and IT support skills through interactive simulations of real-world security operations.

---

## 📋 Project Overview

This portfolio showcases practical knowledge in security operations, incident response, and IT infrastructure management aligned with **Google Cybersecurity Certificate** and **Google IT Support Professional Certificate** training.

The site features five interactive training simulations built with **vanilla HTML, CSS, and JavaScript**—no frameworks, no external APIs. All data is stored locally in the browser using localStorage, demonstrating understanding of modern web technologies and security concepts.

### 🎯 Portfolio Purpose

This lab demonstrates:
- **Real SOC analyst workflows** and threat detection capabilities
- **IT support operations** and help desk procedures
- **Security awareness** and incident response fundamentals
- **Access control principles** and system security
- **Technical proficiency** in web development and security tools

---

## 🏗️ Project Structure

```
cyber/
├── index.html              # Main portfolio dashboard
├── style.css               # SOC-themed styling (dark, neon accents)
├── script.js               # Core JavaScript logic
├── projects/
│   ├── soc-log-analysis.html          # Log monitoring & brute force detection
│   ├── phishing-detection.html         # Email threat awareness training
│   ├── network-intrusion.html          # Network scanning & IDS concepts
│   ├── it-helpdesk.html                # Help desk ticket system
│   └── permissions-lab.html            # Access control & RBAC simulator
└── README.md              # This file
```

---

## 🛡️ Five Interactive Simulations

### 1. **SOC Log Analysis Dashboard** 📊
*Simulates Security Operations Center log monitoring*

**Features:**
- Generate realistic authentication logs with randomized usernames, IPs, and success/failure statuses
- Analyze logs to detect brute force attacks (5+ failed attempts from same IP)
- Identify suspicious IP addresses and calculate attack patterns
- Generate incident reports with recommendations
- Export analysis results as JSON incident reports

**Skills Demonstrated:**
- Log parsing and analysis
- Brute force attack detection algorithms
- Incident report generation
- SOC analyst workflows

**URL:** `projects/soc-log-analysis.html`

---

### 2. **Phishing Detection Simulator** 🎣
*Interactive security awareness training tool*

**Features:**
- Review five realistic phishing email scenarios
- Classify emails as Safe or Phishing
- Receive detailed feedback on detection accuracy
- Learn phishing indicators (urgency language, domain spoofing, suspicious links)
- Track training progress and accuracy score

**Skills Demonstrated:**
- Phishing indicator identification
- Email threat analysis
- Security awareness training
- User education in threat detection

**URL:** `projects/phishing-detection.html`

---

### 3. **Network Intrusion Detection System** 🔍
*Network scanning and IDS concepts simulator*

**Features:**
- Run network scans on IP ranges (192.168.1.0/24)
- Identify open ports and services (SSH, HTTP, HTTPS, FTP, MySQL, SMB)
- Classify ports by risk level (CRITICAL, HIGH, MEDIUM, LOW)
- Generate attack surface assessments
- Provide security hardening recommendations

**Skills Demonstrated:**
- Network reconnaissance concepts
- Port scanning and vulnerability assessment
- Attacker methodology understanding
- IDS/IPS detection principles
- Network security hardening

**URL:** `projects/network-intrusion.html`

---

### 4. **IT Help Desk Ticket System** 🎫
*IT support workflow simulator*

**Features:**
- Submit support tickets for common issues:
  - Password resets
  - WiFi connectivity
  - Printer problems
  - Computer performance
  - Software issues
- Auto-generate ticket IDs and priority levels
- Provide automatic troubleshooting workflows
- Track all submitted tickets and issue history

**Skills Demonstrated:**
- IT support procedures
- Ticket management systems
- Troubleshooting methodology
- Help desk operations
- User support documentation

**URL:** `projects/it-helpdesk.html`

---

### 5. **Permissions & Access Control Lab** 🔑
*Role-based access control simulator*

**Features:**
- Test file access permissions for three user roles:
  - Administrator (Level 3) – Full permissions
  - Employee (Level 2) – Standard access
  - Guest (Level 1) – Read-only access
- Simulate access decisions for four resources with different classification levels
- Learn **Least Privilege Principle** through interactive examples
- Understand why proper access control is critical

**Skills Demonstrated:**
- Role-Based Access Control (RBAC)
- Least privilege security principle
- Access control implementation
- System security fundamentals
- Data classification and protection

**URL:** `projects/permissions-lab.html`

---

## 💾 Incident Memory System

All projects use **localStorage** to persist simulation data:

### Memory Features:
- **Recent Security Events Panel** displays all activities across all simulations
- Events timestamped and categorized by type
- Last 50 events retained (older events automatically removed)
- "Reset Lab Data" button clears all saved data

### Example Events Stored:
- "SOC_LOG_GENERATION: Generated 20 authentication logs"
- "SOC_ANALYSIS_COMPLETE: Analysis: 20 logins, 6 failed, BRUTE FORCE DETECTED"
- "PHISHING_CLASSIFICATION: Email 1: Correct - User classified as Phishing, Actual: Phishing"
- "NETWORK_SCAN: Scanned 192.168.1.0/24: 6 open ports, Risk: HIGH"
- "HELPDESK_TICKET: Ticket TK00001 created: password_reset (Priority: LOW)"
- "PERMISSION_CHECK: admin attempted to read system_logs.txt: ALLOWED"

---

## 🎨 Design Features

### Visual Theme
- **Professional SOC Dashboard Aesthetic**
- Dark theme (black/navy background)
- Neon blue (#00d4ff) & green (#00ff88) accents
- Glowing hover animations and shadows
- Clean grid card layout

### Responsive Design
- Fully responsive on mobile, tablet, desktop
- Breakpoints for 1024px, 768px, 480px
- Touch-friendly button sizing
- Readable typography on all screen sizes

### UI Components
- Status badges (Success, Danger, Warning, Info)
- Alert boxes with color-coded severity
- Smooth transitions and animations
- Custom scrollbar styling
- Professional tables with hover effects

---

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5** – Semantic markup, accessibility
- **CSS3** – Grid, flexbox, animations, custom properties (CSS variables)
- **Vanilla JavaScript** – No frameworks, no jQuery
  - ES6+ features (arrow functions, template literals, destructuring)
  - localStorage API for persistent data
  - Class-based OOP design
  - Event handling and DOM manipulation

### Key JavaScript Classes

```javascript
// Log generation and analysis
class LogGenerator { }
class SecurityAnalyzer { }

// Phishing detection
class PhishingClassifier { }

// Network scanning
class NetworkScanner { }

// Help desk operations
class TicketSystem { }

// Access control
class PermissionManager { }

// Memory management
class LabMemory { }
```

### Architecture Highlights
- **Modular functions** for reusability
- **localStorage abstraction** for easy data persistence
- **Template literals** for clean HTML generation
- **Class-based organization** for maintainability
- **No external dependencies** – pure vanilla JS

---

## 📚 Skills & Knowledge Demonstrated

### Cybersecurity Concepts
- ✓ SOC log analysis and threat detection
- ✓ Brute force attack identification
- ✓ Phishing email detection and indicators
- ✓ Network reconnaissance and port scanning
- ✓ Vulnerability assessment concepts
- ✓ Incident response workflows
- ✓ Risk assessment and prioritization
- ✓ Access control and least privilege
- ✓ Security incident tracking

### IT Support Competencies
- ✓ Help desk ticket systems
- ✓ Issue categorization and prioritization
- ✓ Troubleshooting workflows
- ✓ User support documentation
- ✓ System administration basics
- ✓ Common user issues resolution

### Technical Skills
- ✓ HTML5 semantic markup
- ✓ CSS3 (Grid, Flexbox, animations)
- ✓ Vanilla JavaScript (ES6+)
- ✓ DOM manipulation
- ✓ localStorage API
- ✓ Responsive design
- ✓ Git & GitHub Pages deployment
- ✓ User interface design
- ✓ Data persistence

### Certifications Alignment

**Google Cybersecurity Certificate:**
- Security concepts & frameworks
- Network security fundamentals
- Incident detection & response
- Phishing and social engineering
- Cryptography & data protection
- Access control & authentication

**Google IT Support Professional Certificate:**
- IT infrastructure
- System administration
- Troubleshooting methodology
- Help desk operations
- Network fundamentals
- IT security basics

---

## 🚀 GitHub Pages Deployment

### How to Deploy

1. **Push to GitHub Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial cybersecurity portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/cyber.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch
   - Click Save

3. **Access Your Portfolio:**
   - URL: `https://YOUR_USERNAME.github.io/cyber/`
   - Or configure custom domain

### Static Site Benefits
- ✓ No backend required
- ✓ Free GitHub Pages hosting
- ✓ No server maintenance
- ✓ All data stays in user's browser
- ✓ Instant loading (no API calls)
- ✓ Works offline after first load

---

## 💡 How to Use This Portfolio

### For Job Interviews
1. **Showcase URL** to recruiters – demonstrate live functionality
2. **Explain simulation logic** – walk through code for specific features
3. **Discuss trade-offs** – why vanilla JS instead of React/Vue
4. **Demonstrate understanding** – explain SOC concepts, security principles
5. **Highlight responsive design** – show mobile functionality

### For Learning
1. **Modify simulations** – add new attack patterns, email scenarios
2. **Expand features** – implement additional threat detection logic
3. **Integrate APIs** – (optional) add real threat intelligence
4. **Practice coding** – refactor for better performance or maintainability

### For Practice
1. **Test your security knowledge** – improve phishing detection accuracy
2. **Learn SOC workflows** – understand log analysis concepts
3. **Study permissions** – reinforce least privilege principles
4. **Troubleshoot issues** – practice IT support scenarios

---

## 📖 Educational Resources

### Inside Each Simulation
- Detailed "About This Simulation" sections explain concepts
- Real-world context for each security principle
- Links between concepts (e.g., why network hardening matters)
- Security best practices and recommendations

### Concepts Covered
- **SOC Operations:** Log monitoring, alert triage, incident response
- **Phishing Defense:** Indicator recognition, user training
- **Network Security:** Reconnaissance, IDS concepts, attack surfaces
- **IT Support:** Ticketing, triage, troubleshooting
- **Access Control:** RBAC, least privilege, security principles

---

## 🔒 Security & Privacy

- ✓ **No data transmitted** – all processing in browser
- ✓ **No external APIs** – completely self-contained
- ✓ **No tracking** – no analytics or telemetry
- ✓ **localStorage only** – data never leaves your browser
- ✓ **Reset available** – "Reset Lab Data" clears all information
- ✓ **No credentials needed** – no login, no passwords

---

## 🎓 About the Creator

**Daniel Apolonio**
- Google Cybersecurity Certificate graduate
- Google IT Support Professional Certificate graduate
- Entry-level SOC Analyst & IT Support professional
- Passionate about cybersecurity education and career development

---

## 📝 License

This project is provided as-is for educational and portfolio purposes.

---

## 🙏 Acknowledgments

Built with:
- HTML5, CSS3, Vanilla JavaScript
- GitHub Pages hosting
- Security training concepts from Google Career Certificates
- SOC industry best practices and frameworks

---

## 🚀 Future Enhancements

Potential improvements (not yet implemented):
- [ ] Dark/Light theme toggle
- [ ] Performance optimizations
- [ ] Additional threat scenarios
- [ ] CSV/PDF export for reports
- [ ] Advanced analytics dashboard
- [ ] Multiplayer challenges
- [ ] Points/scoring system
- [ ] Integration with real OSINT APIs (optional)

---

## 📧 Contact & Feedback

Questions about the portfolio or simulations?
- Review code comments in `script.js` and individual HTML files
- Check the "About This Simulation" sections on each page
- Examine browser localStorage to understand data persistence

---

**Last Updated:** June 2026

**Portfolio Link:** [Your GitHub Pages URL]

**Repository:** [Your GitHub Repository URL]

---

## 🎯 Key Takeaway

This portfolio demonstrates that cybersecurity and IT support professionals don't need complex frameworks or expensive tools to showcase their skills. A well-designed, functional application built with fundamental web technologies, paired with deep understanding of security concepts, is often **more impressive** than flashy tools.

**Every recruiter asking "Can you code?" just got a clear answer: Yes, and I understand security too.**
