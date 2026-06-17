// =====================================================
// CYBERSECURITY & IT OPERATIONS LAB - JAVASCRIPT CORE
// =====================================================

// ===== MEMORY/STORAGE MANAGEMENT =====
class LabMemory {
  constructor(namespace = 'lab') {
    this.namespace = namespace;
  }

  set(key, value) {
    const storageKey = `${this.namespace}_${key}`;
    localStorage.setItem(storageKey, JSON.stringify(value));
  }

  get(key) {
    const storageKey = `${this.namespace}_${key}`;
    const item = localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : null;
  }

  append(key, value) {
    const storageKey = `${this.namespace}_${key}`;
    const existing = this.get(key) || [];
    existing.push({
      ...value,
      timestamp: new Date().toISOString()
    });
    // Keep only last 50 entries
    if (existing.length > 50) {
      existing.shift();
    }
    localStorage.setItem(storageKey, JSON.stringify(existing));
  }

  clear(key) {
    const storageKey = `${this.namespace}_${key}`;
    localStorage.removeItem(storageKey);
  }

  clearAll() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.namespace)) {
        localStorage.removeItem(key);
      }
    });
  }
}

const labMemory = new LabMemory('cybersoc');

// ===== LOG GENERATION =====
class LogGenerator {
  constructor() {
    this.usernames = ['ash_ketchum', 'pikachu_admin', 'system_root', 'user123', 'admin_user', 'service_account'];
    this.ipAddresses = ['192.168.1.105', '192.168.1.110', '192.168.1.115', '192.168.1.205', '203.0.113.45', '198.51.100.23'];
  }

  generateAuthLog() {
    const username = this.usernames[Math.floor(Math.random() * this.usernames.length)];
    const ip = this.ipAddresses[Math.floor(Math.random() * this.ipAddresses.length)];
    const success = Math.random() > 0.3;
    const timestamp = new Date(Date.now() - Math.random() * 3600000).toISOString();

    return {
      timestamp,
      username,
      ip,
      status: success ? 'SUCCESS' : 'FAILED',
      action: 'LOGIN'
    };
  }

  generateLogs(count = 20) {
    const logs = [];
    for (let i = 0; i < count; i++) {
      logs.push(this.generateAuthLog());
    }
    return logs;
  }
}

// ===== BRUTE FORCE DETECTION =====
class SecurityAnalyzer {
  detectBruteForce(logs, threshold = 5, timeWindow = 600000) {
    const analysis = {
      totalLogins: logs.length,
      failedLogins: 0,
      successfulLogins: 0,
      suspiciousIPs: [],
      bruteForceDetected: false
    };

    // Count failures by IP
    const ipFailures = {};
    const ipTimestamps = {};

    logs.forEach(log => {
      if (log.status === 'FAILED') {
        analysis.failedLogins++;
        ipFailures[log.ip] = (ipFailures[log.ip] || 0) + 1;
      } else {
        analysis.successfulLogins++;
      }

      if (!ipTimestamps[log.ip]) {
        ipTimestamps[log.ip] = [];
      }
      ipTimestamps[log.ip].push(new Date(log.timestamp).getTime());
    });

    // Check for brute force patterns
    Object.keys(ipFailures).forEach(ip => {
      if (ipFailures[ip] >= threshold) {
        const timestamps = ipTimestamps[ip].sort((a, b) => a - b);
        const firstFailure = timestamps[0];
        const recentFailures = timestamps.filter(t => t - firstFailure <= timeWindow);

        if (recentFailures.length >= threshold) {
          analysis.bruteForceDetected = true;
          analysis.suspiciousIPs.push({
            ip,
            failureCount: ipFailures[ip],
            risk: 'HIGH'
          });
        }
      }

      // Flag IPs with high failure rates
      if (ipFailures[ip] >= 3) {
        if (!analysis.suspiciousIPs.find(item => item.ip === ip)) {
          analysis.suspiciousIPs.push({
            ip,
            failureCount: ipFailures[ip],
            risk: 'MEDIUM'
          });
        }
      }
    });

    return analysis;
  }
}

// ===== PHISHING DETECTION =====
class PhishingClassifier {
  constructor() {
    this.phishingIndicators = {
      urgency: ['urgent', 'immediately', 'verify', 'confirm', 'locked', 'expired', 'action required'],
      fakeLinks: ['click here', 'verify account', 'confirm identity', 'login', 'update password'],
      domains: ['paypa1.com', 'amaz0n.com', 'go0gle.com', 'micr0soft.com']
    };

    this.emails = [
      {
        id: 1,
        from: 'account-security@accounts.google.com',
        subject: 'Your account has been locked',
        body: 'Your Google account was locked for security. Click here to verify your identity immediately.',
        indicators: ['urgency', 'fakeLinks'],
        isPhishing: true
      },
      {
        id: 2,
        from: 'support@realbank.com',
        subject: 'Security Update',
        body: 'We have updated our security policies. Please review at your convenience.',
        indicators: [],
        isPhishing: false
      },
      {
        id: 3,
        from: 'payment@amaz0n.com',
        subject: 'Urgent payment required immediately',
        body: 'Your Amazon payment failed. Update payment info now to avoid account suspension.',
        indicators: ['urgency', 'domains', 'fakeLinks'],
        isPhishing: true
      },
      {
        id: 4,
        from: 'noreply@amazon.com',
        subject: 'Order Confirmation #12345',
        body: 'Thank you for your purchase. Your order has been confirmed.',
        indicators: [],
        isPhishing: false
      },
      {
        id: 5,
        from: 'security@micr0soft.com',
        subject: 'Windows security verification needed',
        body: 'Your Windows license has expired. Verify your license immediately to continue using Windows.',
        indicators: ['urgency', 'domains', 'fakeLinks'],
        isPhishing: true
      }
    ];
  }

  getEmails() {
    return this.emails;
  }

  classifyEmail(emailId) {
    const email = this.emails.find(e => e.id === emailId);
    return email ? email.isPhishing : null;
  }

  analyzeEmail(emailId) {
    const email = this.emails.find(e => e.id === emailId);
    if (!email) return null;

    const analysis = {
      id: email.id,
      isPhishing: email.isPhishing,
      confidence: email.isPhishing ? 85 : 95,
      indicators: this.extractIndicators(email),
      explanation: this.generateExplanation(email)
    };

    return analysis;
  }

  extractIndicators(email) {
    const foundIndicators = [];

    // Check for urgency language
    const urgencyText = (email.subject + ' ' + email.body).toLowerCase();
    this.phishingIndicators.urgency.forEach(word => {
      if (urgencyText.includes(word)) {
        foundIndicators.push({
          type: 'Urgency Language',
          text: word,
          severity: 'HIGH'
        });
      }
    });

    // Check domain
    const domain = email.from.split('@')[1];
    if (this.phishingIndicators.domains.includes(domain)) {
      foundIndicators.push({
        type: 'Suspicious Domain',
        text: domain,
        severity: 'CRITICAL'
      });
    }

    return foundIndicators;
  }

  generateExplanation(email) {
    if (!email.isPhishing) {
      return 'This email appears legitimate. It comes from a verified domain, lacks urgency language, and does not request sensitive information.';
    }

    return 'PHISHING ALERT: This email exhibits multiple phishing indicators including urgency language, domain spoofing, and requests to click links or verify personal information.';
  }
}

// ===== NETWORK SCANNING =====
class NetworkScanner {
  constructor() {
    this.ports = [
      { number: 22, service: 'SSH', status: 'OPEN', risk: 'MEDIUM' },
      { number: 80, service: 'HTTP', status: 'OPEN', risk: 'MEDIUM' },
      { number: 443, service: 'HTTPS', status: 'OPEN', risk: 'LOW' },
      { number: 21, service: 'FTP', status: 'OPEN', risk: 'HIGH' },
      { number: 3306, service: 'MySQL', status: 'OPEN', risk: 'HIGH' },
      { number: 445, service: 'SMB', status: 'OPEN', risk: 'CRITICAL' }
    ];
  }

  scanNetwork(ipRange) {
    const results = {
      ipRange,
      scannedAt: new Date().toISOString(),
      openPorts: this.ports,
      riskySummary: this.calculateRiskSummary(this.ports)
    };

    return results;
  }

  calculateRiskSummary(ports) {
    const criticalPorts = ports.filter(p => p.risk === 'CRITICAL').length;
    const highRiskPorts = ports.filter(p => p.risk === 'HIGH').length;
    const mediumRiskPorts = ports.filter(p => p.risk === 'MEDIUM').length;

    let recommendation = 'SECURE';
    if (criticalPorts > 0) {
      recommendation = 'CRITICAL - Immediate action required';
    } else if (highRiskPorts > 2) {
      recommendation = 'HIGH - Review and harden configuration';
    } else if (mediumRiskPorts > 3) {
      recommendation = 'MEDIUM - Monitor and consider hardening';
    }

    return {
      openPorts: ports.length,
      criticalPorts,
      highRiskPorts,
      mediumRiskPorts,
      attackSurface: `${ports.length} open services`,
      recommendation
    };
  }
}

// ===== HELP DESK TICKET SYSTEM =====
class TicketSystem {
  constructor() {
    this.ticketCount = 0;
    this.issueTypes = [
      { type: 'password_reset', priority: 'LOW', steps: ['Verify user identity', 'Reset password', 'Provide temporary password', 'Instruct on password change'] },
      { type: 'wifi_issue', priority: 'MEDIUM', steps: ['Verify WiFi is enabled', 'Check network list', 'Forget and reconnect', 'Check password', 'Restart modem/router'] },
      { type: 'printer_issue', priority: 'MEDIUM', steps: ['Check printer power', 'Verify USB/network connection', 'Restart printer', 'Reinstall drivers', 'Check for paper jams'] },
      { type: 'slow_computer', priority: 'MEDIUM', steps: ['Check disk space', 'Restart system', 'Review running processes', 'Check for malware', 'Update drivers'] },
      { type: 'software_issue', priority: 'HIGH', steps: ['Identify specific software', 'Check error messages', 'Restart application', 'Reinstall if necessary', 'Escalate if unresolved'] }
    ];
  }

  createTicket(issueType, description) {
    this.ticketCount++;
    const ticketId = `TK${String(this.ticketCount).padStart(5, '0')}`;
    const issueConfig = this.issueTypes.find(i => i.type === issueType);

    const ticket = {
      ticketId,
      issueType,
      description,
      priority: issueConfig?.priority || 'MEDIUM',
      status: 'OPEN',
      createdAt: new Date().toISOString(),
      troubleshootingSteps: issueConfig?.steps || [],
      resolution: null
    };

    return ticket;
  }

  generateTicketNumber() {
    const random = Math.floor(Math.random() * 900000) + 100000;
    return `TK${random}`;
  }
}

// ===== PERMISSIONS/ACCESS CONTROL =====
class PermissionManager {
  constructor() {
    this.roles = {
      admin: { level: 3, permissions: ['read', 'write', 'execute', 'delete'] },
      employee: { level: 2, permissions: ['read', 'write'] },
      guest: { level: 1, permissions: ['read'] }
    };

    this.resources = {
      'system_logs.txt': { requiredLevel: 3, owner: 'admin' },
      'config_file.txt': { requiredLevel: 3, owner: 'admin' },
      'violin_score.pdf': { requiredLevel: 1, owner: 'employee' },
      'project_files.docx': { requiredLevel: 2, owner: 'employee' }
    };
  }

  checkAccess(userRole, resource, action) {
    const role = this.roles[userRole];
    const res = this.resources[resource];

    if (!role || !res) {
      return {
        allowed: false,
        reason: 'Invalid role or resource',
        principle: 'Resource or user not found'
      };
    }

    const canAccess = role.level >= res.requiredLevel && role.permissions.includes(action);

    if (!canAccess) {
      return {
        allowed: false,
        reason: `User role '${userRole}' (level ${role.level}) cannot ${action} resource requiring level ${res.requiredLevel}`,
        principle: 'Least Privilege Principle: Users receive minimum permissions needed for their role'
      };
    }

    return {
      allowed: true,
      reason: `${userRole} has sufficient permissions (level ${role.level} >= ${res.requiredLevel})`,
      principle: 'Least Privilege Principle: User has required permissions for this action'
    };
  }

  getResourceInfo(resource) {
    return this.resources[resource];
  }

  getResources() {
    return Object.keys(this.resources);
  }

  getRoles() {
    return Object.keys(this.roles);
  }
}

// ===== DISPLAY UTILITIES =====
function displayMemoryPanel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const events = labMemory.get('recent_events') || [];
  const html = `
    <div class="memory-panel">
      <div class="memory-title">🔍 Recent Security Events (Local Lab Memory)</div>
      <div class="memory-content">
        ${events.length === 0 
          ? '<p style="color: var(--text-secondary); text-align: center;">No security events recorded yet. Run simulations to populate lab memory.</p>'
          : events.map((event, i) => `
            <div class="memory-entry">
              <div style="color: var(--accent-blue); font-weight: 600; margin-bottom: 0.25rem;">${event.eventType || 'Event'}</div>
              <div>${event.data || event.message || JSON.stringify(event)}</div>
              <div class="memory-entry-time">${new Date(event.timestamp).toLocaleString()}</div>
            </div>
          `).join('')
        }
      </div>
      <button class="btn btn-danger" onclick="resetLabData()">Reset Lab Data</button>
    </div>
  `;

  container.innerHTML = html;
}

function resetLabData() {
  if (confirm('Are you sure you want to reset all lab data? This will clear all simulation history.')) {
    labMemory.clearAll();
    alert('Lab data has been reset.');
    location.reload();
  }
}

function addMemoryEvent(eventType, data) {
  labMemory.append('recent_events', {
    eventType,
    data: typeof data === 'string' ? data : JSON.stringify(data)
  });
}

function formatTimestamp(isoString) {
  return new Date(isoString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function exportToJSON(data, filename) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize memory panel on any page that has one
  const memoryContainer = document.getElementById('memory-panel');
  if (memoryContainer) {
    displayMemoryPanel('memory-panel');
  }

  // Initialize integrations panel if present
  const integrationsContainer = document.getElementById('integrations-panel');
  if (integrationsContainer) {
    updateIntegrationsPanel();
  }

  // Add slide-in animation to cards
  const cards = document.querySelectorAll('.card, .project-card');
  cards.forEach((card, index) => {
    card.style.animation = `slide-in 0.5s ease-out ${index * 50}ms backwards`;
  });
});

// Make classes and functions globally available
window.LabMemory = LabMemory;
window.LogGenerator = LogGenerator;
window.SecurityAnalyzer = SecurityAnalyzer;
window.PhishingClassifier = PhishingClassifier;
window.NetworkScanner = NetworkScanner;
window.TicketSystem = TicketSystem;
window.PermissionManager = PermissionManager;
window.labMemory = labMemory;
window.displayMemoryPanel = displayMemoryPanel;
window.resetLabData = resetLabData;
window.addMemoryEvent = addMemoryEvent;
window.formatTimestamp = formatTimestamp;
window.exportToJSON = exportToJSON;

// ===== INTEGRATION MODAL UI =====
function showIntegrationModal(title, bodyHtml, autoClose = true) {
  // remove existing modal if present
  const existing = document.querySelector('.integration-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.className = 'integration-modal';

  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title">${title}</div>
        <button class="modal-close">Close</button>
      </div>
      <div class="modal-body">${bodyHtml}</div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.remove());

  if (autoClose) {
    setTimeout(() => {
      if (document.body.contains(modal)) modal.remove();
    }, 6000);
  }
}

window.showIntegrationModal = showIntegrationModal;

// ===== INTEGRATIONS PANEL RENDER =====
function updateIntegrationsPanel() {
  const container = document.getElementById('integrations-panel');
  const content = document.getElementById('integrations-content');
  if (!container || !content) return;

  const splunk = labMemory.get('splunk_events') || [];
  const cs = labMemory.get('crowdstrike_alerts') || [];
  const sn = labMemory.get('servicenow_incidents') || [];

  const items = [];

  // Latest Splunk entries (show last 5)
  splunk.slice(-5).forEach(ev => {
    items.push({
      title: `Splunk — ${ev.source}`,
      body: `Data was indexed into Splunk for search and correlation. In a real environment this would: ingest events into an index (e.g. <code>index=cyber</code>), make them searchable, and allow alerts/saved searches to trigger.<br><strong>Example Search:</strong> <code>index=cyber sourcetype=${ev.source} | stats count by ip</code>`
    });
  });

  // Latest CrowdStrike entries
  cs.slice(-5).forEach(ev => {
    items.push({
      title: `CrowdStrike — ${ev.source}`,
      body: `EDR alert created. Analysts would triage, investigate the host, and possibly quarantine the endpoint. Alert summary: ${JSON.stringify(ev.alertData)}`
    });
  });

  // Latest ServiceNow incidents
  sn.slice(-5).forEach(ev => {
    items.push({
      title: `ServiceNow — ${ev.incidentId || 'INC'}`,
      body: `This simulates creating an incident in ServiceNow. In a real IT workflow the incident would be assigned to a queue, have an SLA, and include fields for priority, assignment group, and work notes.<br><strong>Quick actions:</strong> assign to team, add work notes, attach logs, and track until resolved.`
    });
  });

  if (items.length === 0) {
    container.style.display = 'none';
    content.innerHTML = '';
    return;
  }

  // Render items newest-first
  content.innerHTML = items.reverse().map(it => `
    <div style="margin-bottom:0.9rem;">
      <div style="color: var(--accent-blue); font-weight:700; margin-bottom:0.25rem;">${it.title}</div>
      <div style="color: var(--text-secondary); font-size:0.95rem;">${it.body}</div>
    </div>
  `).join('');

  container.style.display = 'block';
}

window.updateIntegrationsPanel = updateIntegrationsPanel;

// ===== SIMULATED VENDOR INTEGRATIONS =====
function simulateSplunkIngest(source, payload) {
  // payload should be serializable
  labMemory.append('splunk_events', { source, payload });
  addMemoryEvent('SPLUNK_INGEST', `Sent ${source} payload to Splunk (${Array.isArray(payload) ? payload.length : 1} items)`);
  showIntegrationModal('Splunk — Data Ingested', `
    <p><strong>Source:</strong> ${source}</p>
    <p>Data was indexed into Splunk for search and correlation. In a real environment this would: ingest events into an index (e.g. <code>index=cyber</code>), make them searchable, and allow alerts/saved searches to trigger.</p>
    <p style="margin-top:0.5rem;"><strong>Example Search:</strong> <code>index=cyber sourcetype=${source} | stats count by ip</code></p>
  `);
    updateIntegrationsPanel();
}

function simulateCrowdStrikeAlert(source, alertData) {
  labMemory.append('crowdstrike_alerts', { source, alertData });
  addMemoryEvent('CROWDSTRIKE_ALERT', `Sent ${source} alert to CrowdStrike`);
  showIntegrationModal('CrowdStrike — EDR Alert Created', `
    <p><strong>Source:</strong> ${source}</p>
    <p>An endpoint detection alert was generated in the EDR console. In practice this would create a detection with a case ID, provide host context, and allow responders to quarantine the host or run investigation actions.</p>
    <p style="margin-top:0.5rem;"><strong>What typically happens:</strong> a security analyst triages the alert, examines host telemetry, and may escalate to incident response or create a ticket in ServiceNow.</p>
  `);
  updateIntegrationsPanel();
}

function simulateServiceNowTicket(ticket) {
  // create a fake incident id and store
  const incident = {
    incidentId: `INC${Math.floor(Math.random() * 900000) + 100000}`,
    ...ticket,
    createdAt: new Date().toISOString()
  };
  labMemory.append('servicenow_incidents', incident);
  addMemoryEvent('SERVICENOW_CREATE', `Created ServiceNow incident ${incident.incidentId}`);
  showIntegrationModal('ServiceNow — Incident Created', `
    <p><strong>Incident:</strong> ${incident.incidentId}</p>
    <p>This simulates creating an incident in ServiceNow. In a real IT workflow the incident would be assigned to a queue, have an SLA, and include fields for priority, assignment group, and work notes.</p>
    <p style="margin-top:0.5rem;"><strong>Quick actions:</strong> assign to team, add work notes, attach logs, and track until resolved.</p>
  `);
  updateIntegrationsPanel();
  return incident;
}

window.simulateSplunkIngest = simulateSplunkIngest;
window.simulateCrowdStrikeAlert = simulateCrowdStrikeAlert;
window.simulateServiceNowTicket = simulateServiceNowTicket;
