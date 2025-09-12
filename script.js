// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initFormHandling();
    initAnimations();
    initCopyToClipboard();
    initScrollEffects();
    initFAQAccordion();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Handling - Envío a Google Forms
function initFormHandling() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.classList.add('loading');
            
            // Collect form data
            const formData = new FormData(rsvpForm);
            const data = {
                nombre: formData.get('nombre'),
                apellidos: formData.get('apellidos'),
                acompanante: formData.get('acompanante') || '',
                asistencia: formData.get('asistencia'),
                autocar: formData.get('autocar'),
                intolerancias: formData.get('intolerancias') || '',
                cancion: formData.get('cancion') || ''
            };
            
            // Send to Google Form
            submitToGoogleForm(data)
                .then(() => {
                    showMessage('¡Gracias por confirmar tu asistencia! Te esperamos el 3 de enero.', 'success');
                    rsvpForm.reset();
                })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                    showMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('loading');
                });
        });
    }
}

// Submit to Google Form - Envío invisible
async function submitToGoogleForm(data) {
    console.log('🚀 Iniciando envío del formulario...');
    console.log('📊 Datos a enviar:', data);
    
    // URL del formulario de Google Forms
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScSA6hP0WC12B0ZhDgWmWre1zj8ucgxi4SPin2Ql0-N0HrsTA/formResponse';
    console.log('🔗 URL del formulario:', GOOGLE_FORM_URL);
    
    // Crear un formulario oculto para enviar los datos
    const hiddenForm = document.createElement('form');
    hiddenForm.action = GOOGLE_FORM_URL;
    hiddenForm.method = 'POST';
    hiddenForm.target = '_blank'; // Cambiar a _blank para evitar problemas
    hiddenForm.style.display = 'none';
    
    // Crear campos ocultos con los datos - IDs actualizados
    const fields = [
        { name: 'entry.1923568619', value: data.nombre || '' },
        { name: 'entry.532342261', value: data.apellidos || '' },
        { name: 'entry.98493706', value: data.acompanante || '' },
        { name: 'entry.2054509148', value: data.asistencia || '' },
        { name: 'entry.1750848479', value: data.autocar || '' },
        { name: 'entry.613092140', value: data.intolerancias || '' },
        { name: 'entry.1651643824', value: data.cancion || '' }
    ];
    
    console.log('📝 Campos del formulario:', fields);
    
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        hiddenForm.appendChild(input);
        console.log(`✅ Campo añadido: ${field.name} = ${field.value}`);
    });
    
    try {
        console.log('📤 Enviando formulario...');
        
        // Crear datos en formato URL-encoded
        const formData = new URLSearchParams();
        fields.map(field => {
            console.log(`📝 Enviando: ${field.name} = ${field.value}`);
            formData.append(field.name, field.value);
        });
        console.log(formData.toString());
        
        // Enviar usando fetch con no-cors
        const response = await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {  
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData
        });
        
        console.log('✅ Formulario enviado correctamente');
        return Promise.resolve();
    } catch (error) {
        console.error('❌ Error al enviar el formulario, probando método alternativo:', error);
        
        // Si falla, usar método alternativo
        try {
            return await submitToGoogleFormAlternative(data);
        } catch (altError) {
            console.error('❌ Error también con método alternativo:', altError);
            throw altError;
        }
    }
}

// Show Message Function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert after form
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.parentNode.insertBefore(messageDiv, rsvpForm.nextSibling);
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Copy to Clipboard Function
function initCopyToClipboard() {
    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showCopySuccess();
            }).catch(err => {
                console.error('Error copying text: ', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            fallbackCopyToClipboard(text);
        }
    };
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

// Show copy success feedback
function showCopySuccess() {
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }
}

// Animations on Scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.ceremony, .celebration, .schedule-item, .recommendation-category');
    animateElements.forEach(el => observer.observe(el));
}

// Scroll Effects
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header background opacity based on scroll
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Countdown Timer (Optional)
function initCountdown() {
    const weddingDate = new Date('January 3, 2026 12:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // You can add a countdown display element to your HTML if desired
        // const countdownElement = document.getElementById('countdown');
        // if (countdownElement) {
        //     countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        // }
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            // Wedding day has arrived!
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize countdown if you want to add it
// initCountdown();

// Form Validation Enhancement
function validateForm() {
    const form = document.getElementById('rsvpForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#E6F3FF';
        }
    });
    
    return isValid;
}

// Enhanced form submission with validation
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                showMessage('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            // Continue with form submission...
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.classList.add('loading');
            
            setTimeout(() => {
                showMessage('¡Gracias por confirmar tu asistencia! Te esperamos el 3 de enero.', 'success');
                rsvpForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.classList.remove('loading');
            }, 2000);
        });
    }
});

// Lazy Loading for Images (if you add more images later)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
// initLazyLoading();

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll handling logic here
}, 16); // ~60fps

// Add scroll event listener with optimization
window.addEventListener('scroll', optimizedScrollHandler);

// FAQ Accordion Functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        if (question && toggle) {
            question.addEventListener('click', function() {
                // Toggle active class
                item.classList.toggle('active');
                
                // Update toggle symbol
                if (item.classList.contains('active')) {
                    toggle.textContent = '−';
                } else {
                    toggle.textContent = '+';
                }
                
                // Close other FAQ items (optional - remove if you want multiple open)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-toggle').textContent = '+';
                    }
                });
            });
        }
    });
}

// Función para obtener los IDs correctos del formulario de Google
function getGoogleFormIds() {
    console.log('🔍 Para obtener los IDs correctos del formulario:');
    console.log('1. Abre el formulario en el navegador: https://docs.google.com/forms/d/e/1FAIpQLScSA6hP0WC12B0ZhDgWmWre1zj8ucgxi4SPin2Ql0-N0HrsTA/viewform');
    console.log('2. Abre las herramientas de desarrollador (F12)');
    console.log('3. Ve a la pestaña "Elements"');
    console.log('4. Busca los inputs y copia los valores del atributo "name"');
    console.log('5. Los nombres deberían ser como "entry.XXXXXXXXX"');
    console.log('');
    console.log('💡 Alternativa: Ejecuta este código en la consola del formulario:');
    console.log('document.querySelectorAll("input[name^=\\"entry.\\"]").forEach((input, i) => console.log(`${i+1}. ${input.name} - ${input.type || "text"}`));');
}

// Función alternativa para enviar datos usando un iframe oculto
function submitToGoogleFormAlternative(data) {
    console.log('🚀 Usando método alternativo...');
    
    // Crear un iframe oculto
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);
    
    // Crear formulario
    const form = document.createElement('form');
    form.action = 'https://docs.google.com/forms/d/e/1FAIpQLScSA6hP0WC12B0ZhDgWmWre1zj8ucgxi4SPin2Ql0-N0HrsTA/formResponse';
    form.method = 'POST';
    form.target = 'hidden_iframe';
    
    // Añadir campos (usando IDs genéricos que suelen funcionar)
    const fields = [
        { name: 'entry.1923568619', value: data.nombre || '' },
        { name: 'entry.532342261', value: data.apellidos || '' },
        { name: 'entry.98493706', value: data.acompanante || '' },
        { name: 'entry.2054509148', value: data.asistencia || '' },
        { name: 'entry.1750848479', value: data.autocar || '' },
        { name: 'entry.613092140', value: data.intolerancias || '' },
        { name: 'entry.1651643824', value: data.cancion || '' }
    ];
    
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });
    
    // Enviar formulario
    document.body.appendChild(form);
    form.submit();
    
    // Limpiar después de un tiempo
    setTimeout(() => {
        if (document.body.contains(form)) {
            document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
        }
    }, 3000);
    
    console.log('✅ Formulario enviado con método alternativo');
    return Promise.resolve();
}


// Export functions for potential external use
window.WeddingWebsite = {
    showMessage,
    copyToClipboard,
    validateForm,
    getGoogleFormIds,
    submitToGoogleFormAlternative
};
