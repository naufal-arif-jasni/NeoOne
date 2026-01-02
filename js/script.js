// ==================== GLOBAL DATA ====================
let products = [
    { name: "Infinite X1 Carbon", sku: "N1-X1-CARB", stock: 1250, price: 1899 },
    { name: "Infinite S Lite", sku: "N1-SL-WHITE", stock: 3400, price: 599 },
    { name: "Infinity Pro Gold", sku: "N1-PG-24K", stock: 45, price: 4500 },
    { name: "Infinite X2 Titanium", sku: "N1-X2-TITAN", stock: 850, price: 2499 },
    { name: "Infinite Core Nano", sku: "N1-CN-BLK", stock: 2100, price: 899 },
    { name: "Infinity Onyx Edition", sku: "N1-OE-DRK", stock: 15, price: 5200 },
    { name: "Infinite S Pulse", sku: "N1-SP-BLUE", stock: 4500, price: 450 }
];

let vendors = [
    { name: "Silicon Flow Co.", description: "Primary processor supplier based in Taiwan.", status: "Preferred" },
    { name: "KL Energy Ltd.", description: "Battery assembly and testing specialists.", status: "Active" },
    { name: "CrysGlass S.A.", description: "Swiss sapphire glass manufacturer.", status: "Inactive" },
    { name: "Green Comfort", description: "Eco-friendly HVAC and smart climate control solutions.", status: "Inactive" },
    { name: "Nexus Systems", description: "Cloud infrastructure and enterprise networking architecture.", status: "Preferred" },
    { name: "Solaris Prime", description: "Next-gen photovoltaic and solar integration", status: "Preferred" },
    { name: "Prism Media", description: "Digital asset management and global branding consultants.", status: "Active" },
    { name: "Hydro Core", description: "Industrial fluid management and high pressure cooling systems provider.", status: "Active" },
    { name: "Stratas Consulting", description: "Global supply chain optimization and strategic manufacturing advisors", status: "Active" }
];

let orders = [
    { id: "PO-9921", vendor: "Silicon Flow", date: "2023-12-24", amount: 240000, status: "Paid" },
    { id: "PO-9922", vendor: "KL Energy", date: "2024-01-05", amount: 15000, status: "Paid" },
    { id: "PO-9923", vendor: "Green Comfort", date: "2024-10-23", amount: 18000, status: "Cancelled" },
    { id: "PO-9924", vendor: "Nexus Systems", date: "2024-12-28", amount: 10000, status: "Processing" },
    { id: "PO-9925", vendor: "Solaris Prime", date: "2025-03-25", amount: 18000, status: "Paid" },
    { id: "PO-9926", vendor: "Prism Media", date: "2025-04-07", amount: 13580, status: "Pending" },
    { id: "PO-9927", vendor: "Volt Dynamics", date: "2025-11-22", amount: 22027, status: "Pending" }
];

const execData = [
    {
        name: "Naufal Arif",
        role: "Chief Innovation Officer",
        img: "images/naufal.jpg",
        phone: "+60 10-909 4907",
        email: "naufal@neoone.com",
        bio: "Naufal leads our technology and innovation roadmap. With over 15 years in software architecture and logistics tech, He pioneered our real-time tracking algorithms that reduced transit delays by 22% globally."
    },
    {
        name: "Aina Adriana",
        role: "VP Global Supply Chain",
        img: "images/aina.jpg",
        phone: "+60 14-307 5096",
        email: "aina@neoone.com",
        bio: "Aina oversees all physical operations across 18 global hubs. She specializes in lean management and has successfully integrated automated sorting systems in our Southeast Asian facilities."
    },
    {
        name: "Dhania Nashwa",
        role: "Chief Financial Officer",
        img: "images/female.jpg",
        phone: "+60 17-234 5678",
        email: "dhania@neoone.com",
        bio: "Dhania manages NeoOne's global financial strategy. Previously a partner at a top-tier consulting firm, she brings deep expertise in capital allocation and international tax optimization for logistics enterprises."
    },
    {
        name: "Alif Aiman",
        role: "Head of Global Strategy",
        img: "images/male.png",
        phone: "+60 13-445 1122",
        email: "alif@neoone.com",
        bio: "Alif is responsible for market expansion and long-term planning. He has overseen NeoOne's entry into 5 new international markets in the last three years, focusing on emerging trade corridors."
    },
    {
        name: "Nurrannisa Izzati",
        role: "Chief People Officer",
        img: "images/female.jpg",
        phone: "+60 19-334 8877",
        email: "nisa@neoone.com",
        bio: "Nisa drives our talent acquisition and corporate culture. She ensures that NeoOne remains a top-tier employer by implementing industry-leading wellness and professional development programs."
    },
    {
        name: "Ammar Afif",
        role: "General Counsel",
        img: "images/male.png",
        phone: "+60 16-778 9900",
        email: "ammar@neoone.com",
        bio: "Ammar manages all legal affairs and regulatory compliance. His expertise in maritime law and cross-border trade regulations is vital for navigating complex international shipping environments."
    }
];

// ==================== MODAL INSTANCES ====================
let productModal, vendorModal, orderModal;

// Initialize modals when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('productModal')) {
        productModal = new bootstrap.Modal(document.getElementById('productModal'));
    }
    if (document.getElementById('vendorModal')) {
        vendorModal = new bootstrap.Modal(document.getElementById('vendorModal'));
    }
    if (document.getElementById('orderModal')) {
        orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    }
});

// ==================== UTILITY FUNCTIONS ====================
function showNotification(message, type = 'info') {
    const toast = document.getElementById('neo-toast');
    const msgEl = document.getElementById('toast-message');
    const iconEl = document.getElementById('toast-icon');

    msgEl.innerText = message;
    toast.className = `neo-toast active ${type}`;
    
    if (type === 'success') iconEl.className = 'fas fa-check-circle text-success';
    else if (type === 'error') iconEl.className = 'fas fa-exclamation-triangle text-danger';
    else iconEl.className = 'fas fa-info-circle text-primary';

    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

function checkAuth() {
    const user = localStorage.getItem('neoone_current_user');
    if (!user) {
        window.location.href = 'index.html';
    }
}

function logout() {
    localStorage.removeItem('neoone_current_user');
    window.location.href = 'index.html';
}

// ==================== CLOCK FUNCTION ====================
function refreshClock() {
    const now = new Date();
    const timeOptions = { timeZone: 'Asia/Kuala_Lumpur', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const dateOptions = { timeZone: 'Asia/Kuala_Lumpur', weekday: 'long', year: 'numeric', month: 'short', day: '2-digit' };
    
    const timeEl = document.getElementById('klTime');
    const dateEl = document.getElementById('klDate');
    
    if (timeEl) timeEl.innerText = new Intl.DateTimeFormat('en-GB', timeOptions).format(now);
    if (dateEl) dateEl.innerText = new Intl.DateTimeFormat('en-GB', dateOptions).format(now);
}

// Start clock if elements exist
if (document.getElementById('klTime')) {
    setInterval(refreshClock, 1000);
    refreshClock();
}

// ==================== BACK TO TOP ====================
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (btn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    }
};

const backBtn = document.getElementById("backToTop");
if (backBtn) {
    backBtn.onclick = function() { 
        window.scrollTo({top: 0, behavior: 'smooth'}); 
    };
}

// ==================== LOAD INCLUDES ====================
function loadIncludes() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) {
        fetch('includes/header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
            });
    }
    
    if (footerPlaceholder) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            });
    }
}

// ==================== CHARTS ====================
function renderCharts() {
    const revenueCanvas = document.getElementById('revenueChart');
    const stockCanvas = document.getElementById('stockChart');
    
    if (revenueCanvas) {
        const ctxR = revenueCanvas.getContext('2d');
        if (window.rChart) window.rChart.destroy();
        window.rChart = new Chart(ctxR, {
            type: 'line',
            data: { 
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], 
                datasets: [{ 
                    label: 'Revenue (MYR)', 
                    data: [1.2, 1.8, 1.4, 2.5], 
                    borderColor: '#3b82f6', 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                    fill: true, 
                    tension: 0.4 
                }] 
            },
            options: { 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } } 
            }
        });
    }

    if (stockCanvas) {
        const ctxS = stockCanvas.getContext('2d');
        if (window.sChart) window.sChart.destroy();
        window.sChart = new Chart(ctxS, {
            type: 'doughnut',
            data: { 
                labels: ['Malaysia', 'Global Sales', 'Inventory'], 
                datasets: [{ 
                    data: [65, 25, 10], 
                    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'], 
                    borderWidth: 0 
                }] 
            },
            options: { 
                maintainAspectRatio: false, 
                cutout: '80%', 
                plugins: { legend: { position: 'bottom' } } 
            }
        });
    }
}

// ==================== INVENTORY MANAGEMENT ====================
function renderInventory() {
    const body = document.getElementById('inventoryBody');
    if (!body) return;
    
    body.innerHTML = '';
    products.forEach((p, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="ps-4 fw-bold">${p.name}</td>
            <td class="small text-muted">${p.sku}</td>
            <td><span class="badge ${p.stock < 100 ? 'bg-danger':'bg-success-subtle text-success'}">${p.stock} Units</span></td>
            <td>${p.price.toLocaleString()}</td>
            <td class="pe-4">
                <button class="btn btn-sm btn-outline-primary border-0 me-1" onclick="editProduct(${i})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteProduct(${i})"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        body.appendChild(row);
    });
}

function openProductModal() { 
    document.getElementById('productForm').reset(); 
    document.getElementById('editIndex').value = ""; 
    productModal.show(); 
}

function editProduct(i) {
    const p = products[i];
    document.getElementById('editIndex').value = i;
    document.getElementById('watchName').value = p.name;
    document.getElementById('watchSKU').value = p.sku;
    document.getElementById('watchStock').value = p.stock;
    document.getElementById('watchPrice').value = p.price;
    productModal.show();
}

function deleteProduct(i) {
    if (confirm(`WARNING: Permanent removal of "${products[i].name}"?`)) {
        products.splice(i, 1);
        renderInventory();
    }
}

const productForm = document.getElementById('productForm');
if (productForm) {
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const i = document.getElementById('editIndex').value;
        const p = { 
            name: document.getElementById('watchName').value, 
            sku: document.getElementById('watchSKU').value, 
            stock: parseInt(document.getElementById('watchStock').value), 
            price: parseFloat(document.getElementById('watchPrice').value) 
        };
        if (i === "") products.push(p); 
        else products[i] = p;
        productModal.hide();
        renderInventory();
    });
}

// ==================== VENDOR MANAGEMENT ====================
function renderVendors() {
    const container = document.getElementById('vendorsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    vendors.forEach((v, i) => {
        const badgeClass = v.status === 'Preferred' ? 'bg-primary' : v.status === 'Active' ? 'bg-success' : 'bg-secondary';
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="neo-card vendor-card-wrapper">
                <div class="vendor-actions">
                    <button class="btn btn-sm btn-outline-primary border-0" onclick="editVendor(${i})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteVendor(${i})"><i class="fas fa-trash-alt"></i></button>
                </div>
                <h5 class="fw-bold mb-3">${v.name}</h5>
                <p class="small text-muted">${v.description}</p>
                <span class="badge ${badgeClass}">${v.status}</span>
            </div>
        `;
        container.appendChild(col);
    });
}

function openVendorModal() {
    document.getElementById('vendorForm').reset();
    document.getElementById('vendorEditIndex').value = "";
    vendorModal.show();
}

function editVendor(i) {
    const v = vendors[i];
    document.getElementById('vendorEditIndex').value = i;
    document.getElementById('vendorName').value = v.name;
    document.getElementById('vendorDesc').value = v.description;
    document.getElementById('vendorStatus').value = v.status;
    vendorModal.show();
}

function deleteVendor(i) {
    if (confirm(`Remove vendor "${vendors[i].name}"?`)) {
        vendors.splice(i, 1);
        renderVendors();
    }
}

const vendorForm = document.getElementById('vendorForm');
if (vendorForm) {
    vendorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const i = document.getElementById('vendorEditIndex').value;
        const v = {
            name: document.getElementById('vendorName').value,
            description: document.getElementById('vendorDesc').value,
            status: document.getElementById('vendorStatus').value
        };
        if (i === "") vendors.push(v); 
        else vendors[i] = v;
        vendorModal.hide();
        renderVendors();
    });
}

// ==================== ORDER MANAGEMENT ====================
function renderOrders() {
    const body = document.getElementById('ordersBody');
    if (!body) return;
    
    body.innerHTML = '';
    orders.forEach((o, i) => {
        const badgeClass = o.status === 'Paid' ? 'bg-success' : o.status === 'Processing' ? 'bg-warning' : o.status === 'Pending' ? 'bg-info' : 'bg-danger';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="ps-4 fw-bold">${o.id}</td>
            <td>${o.vendor}</td>
            <td>${new Date(o.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
            <td>RM ${o.amount.toLocaleString()}</td>
            <td><span class="badge ${badgeClass}">${o.status}</span></td>
            <td class="pe-4">
                <button class="btn btn-sm btn-outline-primary border-0 me-1" onclick="editOrder(${i})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteOrder(${i})"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        body.appendChild(row);
    });
}

function openOrderModal() {
    document.getElementById('orderForm').reset();
    document.getElementById('orderEditIndex').value = "";
    orderModal.show();
}

function editOrder(i) {
    const o = orders[i];
    document.getElementById('orderEditIndex').value = i;
    document.getElementById('orderId').value = o.id;
    document.getElementById('orderVendor').value = o.vendor;
    document.getElementById('orderDate').value = o.date;
    document.getElementById('orderAmount').value = o.amount;
    document.getElementById('orderStatus').value = o.status;
    orderModal.show();
}

function deleteOrder(i) {
    if (confirm(`Delete order "${orders[i].id}"?`)) {
        orders.splice(i, 1);
        renderOrders();
    }
}

const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const i = document.getElementById('orderEditIndex').value;
        const o = {
            id: document.getElementById('orderId').value,
            vendor: document.getElementById('orderVendor').value,
            date: document.getElementById('orderDate').value,
            amount: parseFloat(document.getElementById('orderAmount').value),
            status: document.getElementById('orderStatus').value
        };
        if (i === "") orders.push(o); 
        else orders[i] = o;
        orderModal.hide();
        renderOrders();
    });
}

// ==================== EXECUTIVE PROFILES ====================
function showExecDetails(index) {
    const data = execData[index];
    document.getElementById('modalExecName').innerText = `Profile: ${data.name}`;
    document.getElementById('modalExecTitle').innerText = data.name;
    document.getElementById('modalExecRole').innerText = data.role;
    document.getElementById('modalExecImg').src = data.img;
    document.getElementById('modalExecBio').innerText = data.bio;
    document.getElementById('modalExecContact').innerHTML = `
        <div class="mb-1"><i class="fas fa-phone-alt me-2"></i> ${data.phone}</div>
        <div><i class="fas fa-envelope me-2"></i> ${data.email}</div>
    `;
    
    const execModal = new bootstrap.Modal(document.getElementById('execModal'));
    execModal.show();
}