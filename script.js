document.addEventListener('DOMContentLoaded', () => {
  // Инициализация клиента Supabase
  const supabaseClient = window.supabase.createClient(
    'https://rtzjkrxsrarpywkpiosm.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0emprcnhzcmFycHl3a3Bpb3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjU3MTUsImV4cCI6MjA3MDM0MTcxNX0.hbVI1xa2uv4x06a-kUbUIHfGVE4reL5sj7m1yQfd5N0'
  );

  // Элементы для управления шапкой
  const navButtons = document.getElementById('nav-buttons');
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const resetModal = document.getElementById('reset-modal');
  const profileModal = document.getElementById('profile-modal');
  const closeModalBtns = document.querySelectorAll('.close-modal');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMobileNav = document.getElementById('close-mobile-nav');
  const mobileLoginBtn = document.getElementById('mobile-login');
  
  // Элементы сообщений об ошибках
  const loginError = document.getElementById('login-error');
  const signupError = document.getElementById('signup-error');
  const resetError = document.getElementById('reset-error');
  
  // Показать/скрыть модальные окна
  function showModal(modal) {
    if (!modal) return;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  function hideModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
    // Сбрасываем ошибки при закрытии
    if (loginError) loginError.style.display = 'none';
    if (signupError) signupError.style.display = 'none';
    if (resetError) resetError.style.display = 'none';
  }
  
  // Функция для обновления шапки в зависимости от статуса авторизации
  function updateHeader(user) {
    if (!navButtons) return;
    
    if (user) {
      // Пользователь авторизован - показываем аватар
      navButtons.innerHTML = `
        <div class="profile-dropdown">
          <div class="user-avatar" id="profile-button">
            ${user.user_metadata?.avatar_url ? 
              `<img src="${user.user_metadata.avatar_url}" alt="Аватар">` : 
              '😊'}
          </div>
          <div class="dropdown-content">
            <a href="#" id="go-to-profile"><i class="fas fa-user"></i> Профиль</a>
            <a href="#" id="view-orders"><i class="fas fa-history"></i> Заказы</a>
            <a href="#" id="logout-header"><i class="fas fa-sign-out-alt"></i> Выйти</a>
          </div>
        </div>
      `;
      
      const profileButton = document.getElementById('profile-button');
      const dropdownContent = document.querySelector('.dropdown-content');
      
      if (profileButton && dropdownContent) {
        // Обработчик клика по кнопке профиля
        profileButton.addEventListener('click', (e) => {
          e.stopPropagation();
          dropdownContent.classList.toggle('show');
        });
        
        // Обработчики для пунктов меню
        const goToProfile = document.getElementById('go-to-profile');
        const logoutHeader = document.getElementById('logout-header');
        
        if (goToProfile) {
          goToProfile.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.remove('show');
            loadProfile();
            loadMenu();
            showModal(profileModal);
          });
        }
        
        if (logoutHeader) {
          logoutHeader.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.remove('show');
            logout();
          });
        }
        
        // Закрытие меню при клике вне его области
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.profile-dropdown') && dropdownContent) {
            dropdownContent.classList.remove('show');
          }
        });
      }
      
    } else {
      // Пользователь не авторизован - показываем кнопку входа
      navButtons.innerHTML = `
        <button id="btn-login-header" class="btn btn-secondary">Войти</button>
      `;
      
      const btnLoginHeader = document.getElementById('btn-login-header');
      if (btnLoginHeader) {
        btnLoginHeader.addEventListener('click', () => showModal(loginModal));
      }
    }
  }

  // Элементы личного кабинета
  const userEmailSpan = document.getElementById('user-email');
  const btnLogout = document.getElementById('btn-logout');
  const profileView = document.getElementById('profile-view');
  const profileEdit = document.getElementById('profile-edit');
  const profileFirstName = document.getElementById('profile-first-name');
  const profileLastName = document.getElementById('profile-last-name');
  const profilePhone = document.getElementById('profile-phone');
  const profileAddress = document.getElementById('profile-address');
  const btnEditProfile = document.getElementById('btn-edit-profile');
  const btnSaveProfile = document.getElementById('btn-save-profile');
  const btnCancelProfile = document.getElementById('btn-cancel-profile');
  const editFirstName = document.getElementById('edit-first-name');
  const editLastName = document.getElementById('edit-last-name');
  const editPhone = document.getElementById('edit-phone');
  const editAddress = document.getElementById('edit-address');
  const pizzaMenu = document.getElementById('pizza-menu');
  const hotdogMenu = document.getElementById('hotdog-menu');
  const cartDiv = document.getElementById('cart');
  const cartTotal = document.getElementById('cart-total');
  const btnOrder = document.getElementById('btn-order');
  
  let cart = [];

  // Функция для показа сообщений
  function showMessage(msg, isError = true) {
    alert(isError ? 'Ошибка: ' + msg : 'Успех: ' + msg);
  }
  
  // Показать ошибку в модальном окне
  function showFormError(element, message) {
    if (!element) return;
    element.textContent = message;
    element.style.display = 'block';
  }

  // Обработчики для модальных окон
  const showSignup = document.getElementById('show-signup');
  const showLogin = document.getElementById('show-login');
  const showReset = document.getElementById('show-reset');
  const showLoginFromReset = document.getElementById('show-login-from-reset');
  
  if (showSignup) {
    showSignup.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal(loginModal);
      showModal(signupModal);
    });
  }
  
  if (showLogin) {
    showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal(signupModal);
      showModal(loginModal);
    });
  }
  
  if (showReset) {
    showReset.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal(loginModal);
      showModal(resetModal);
    });
  }
  
  if (showLoginFromReset) {
    showLoginFromReset.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal(resetModal);
      showModal(loginModal);
    });
  }
  
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hideModal(loginModal);
      hideModal(signupModal);
      hideModal(resetModal);
      hideModal(profileModal);
    });
  });
  
  // Закрытие модальных окон при клике вне контента
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) hideModal(loginModal);
    if (e.target === signupModal) hideModal(signupModal);
    if (e.target === resetModal) hideModal(resetModal);
    if (e.target === profileModal) hideModal(profileModal);
  });

  // Регистрация
  async function signUp() {
    const email = document.getElementById('signup-email')?.value.trim();
    const password = document.getElementById('signup-password')?.value.trim();
    const confirm = document.getElementById('signup-confirm')?.value.trim();
    
    // Сбросить предыдущие ошибки
    if (signupError) signupError.style.display = 'none';
    
    if (!email || !password || !confirm) {
      showFormError(signupError, 'Все поля обязательны для заполнения');
      return;
    }
    
    if (password !== confirm) {
      showFormError(signupError, 'Пароли не совпадают');
      return;
    }
    
    if (password.length < 6) {
      showFormError(signupError, 'Пароль должен содержать не менее 6 символов');
      return;
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) {
        // Обработка специфических ошибок
        if (error.message.includes('User already registered')) {
          showFormError(signupError, 'Пользователь с таким email уже зарегистрирован');
        } else if (error.message.includes('password')) {
          showFormError(signupError, 'Ненадежный пароль. Используйте более сложный пароль');
        } else {
          showFormError(signupError, `Ошибка регистрации: ${error.message}`);
        }
        return;
      }

      showMessage('Регистрация успешна! Проверьте почту для подтверждения.', false);
      hideModal(signupModal);
    } catch (e) {
      showFormError(signupError, `Ошибка подключения: ${e.message}`);
    }
  }

  // Вход
  async function login() {
    const email = document.getElementById('modal-email')?.value.trim();
    const password = document.getElementById('modal-password')?.value.trim();

    // Сбросить предыдущие ошибки
    if (loginError) loginError.style.display = 'none';
    
    if (!email || !password) {
      showFormError(loginError, 'Введите email и пароль');
      return;
    }

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (error) {
        // Обработка ошибки "Invalid login credentials"
        if (error.message === 'Invalid login credentials') {
          showFormError(loginError, 'Неверный email или пароль');
        } else if (error.message.includes('Email not confirmed')) {
          showFormError(loginError, 'Email не подтвержден. Проверьте вашу почту.');
        } else {
          showFormError(loginError, `Ошибка входа: ${error.message}`);
        }
        return;
      }

      hideModal(loginModal);
      loginSuccess(data.user);
    } catch (e) {
      showFormError(loginError, `Ошибка подключения: ${e.message}`);
    }
  }

  // Восстановление пароля
  async function resetPassword() {
    const email = document.getElementById('reset-email')?.value.trim();
    
    // Сбросить предыдущие ошибки
    if (resetError) resetError.style.display = 'none';
    
    if (!email) {
      showFormError(resetError, 'Введите ваш email');
      return;
    }
    
    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email);
      
      if (error) {
        if (error.message.includes('email')) {
          showFormError(resetError, 'Пользователь с таким email не найден');
        } else {
          showFormError(resetError, `Ошибка: ${error.message}`);
        }
        return;
      }
      
      showMessage('Инструкции для сброса пароля отправлены на вашу почту', false);
      hideModal(resetModal);
    } catch (e) {
      showFormError(resetError, `Ошибка: ${e.message}`);
    }
  }

  // Успешный вход
  function loginSuccess(user) {
    updateHeader(user);
    if (userEmailSpan) userEmailSpan.textContent = user.email;
    cart = [];
    renderCart();
    loadProfile();
  }

  // Выход
  async function logout() {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        showMessage(`Ошибка выхода: ${error.message}`);
        return;
      }
      cart = [];
      updateHeader(null);
      hideModal(profileModal);
    } catch (e) {
      showMessage(`Ошибка выхода: ${e.message}`);
    }
  }

  // Загрузка профиля
  async function loadProfile() {
    try {
      const authResponse = await supabaseClient.auth.getUser();
      const user = authResponse.data?.user;
      const userError = authResponse.error;
      
      if (userError || !user) return;
      
      const profileResponse = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileResponse.error) {
        console.error('Ошибка загрузки профиля:', profileResponse.error);
        return;
      }
      
      const data = profileResponse.data;
      if (profileFirstName) profileFirstName.textContent = data.first_name || 'Не указано';
      if (profileLastName) profileLastName.textContent = data.last_name || 'Не указано';
      if (profilePhone) profilePhone.textContent = data.phone || 'Не указан';
      
      // Обработка адреса
      let addressText = 'Не указан';
      if (data.address && data.address.full_address) {
        addressText = data.address.full_address;
      }
      if (profileAddress) profileAddress.textContent = addressText;
    } catch (e) {
      console.error('Ошибка загрузки профиля:', e);
    }
  }

  // Сохранение профиля
  async function saveProfile() {
    try {
      const authResponse = await supabaseClient.auth.getUser();
      const user = authResponse.data?.user;
      const userError = authResponse.error;
      
      if (userError || !user) {
        showMessage('Пожалуйста, войдите в систему');
        return;
      }
      
      const profileData = {
        first_name: editFirstName?.value.trim() || '',
        last_name: editLastName?.value.trim() || '',
        phone: editPhone?.value.trim() || '',
        address: {
          full_address: editAddress?.value.trim() || ''
        }
      };
      
      const { error } = await supabaseClient
        .from('profiles')
        .update(profileData)
        .eq('id', user.id);
      
      if (error) {
        showMessage(`Ошибка сохранения профиля: ${error.message}`);
        return;
      }
      
      showMessage('Профиль успешно обновлен!', false);
      if (profileEdit) profileEdit.classList.remove('profile-active');
      if (profileView) profileView.classList.add('profile-active');
      loadProfile();
    } catch (e) {
      showMessage(`Ошибка сохранения профиля: ${e.message}`);
    }
  }

  // Редактирование профиля
  async function editProfile() {
    try {
      const authResponse = await supabaseClient.auth.getUser();
      const user = authResponse.data?.user;
      const userError = authResponse.error;
      
      if (userError || !user) {
        showMessage('Пожалуйста, войдите в систему');
        return;
      }
      
      const profileResponse = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (profileResponse.error) {
        showMessage(`Ошибка загрузки профиля: ${profileResponse.error.message}`);
        return;
      }
      
      const data = profileResponse.data;
      if (editFirstName) editFirstName.value = data.first_name || '';
      if (editLastName) editLastName.value = data.last_name || '';
      if (editPhone) editPhone.value = data.phone || '';
      
      if (editAddress) {
        if (data.address && data.address.full_address) {
          editAddress.value = data.address.full_address;
        } else {
          editAddress.value = '';
        }
      }
      
      if (profileView) profileView.classList.remove('profile-active');
      if (profileEdit) profileEdit.classList.add('profile-active');
    } catch (e) {
      showMessage(`Ошибка загрузки профиля: ${e.message}`);
    }
  }

  // Загрузка меню
  async function loadMenu() {
    try {
      if (pizzaMenu) pizzaMenu.innerHTML = '<p class="loading-text">Загрузка пицц...</p>';
      if (hotdogMenu) hotdogMenu.innerHTML = '<p class="loading-text">Загрузка хот-догов...</p>';
      
      // Загрузка пицц
      const pizzaResponse = await supabaseClient
        .from('dishes')
        .select('*')
        .eq('category', 'pizza');
      
      if (pizzaResponse.error) {
        if (pizzaMenu) pizzaMenu.innerHTML = '<p class="error-text">Ошибка загрузки пицц</p>';
      } else if (!pizzaResponse.data.length) {
        if (pizzaMenu) pizzaMenu.innerHTML = '<p class="empty-text">Пиццы не найдены</p>';
      } else if (pizzaMenu) {
        pizzaMenu.innerHTML = '';
        pizzaResponse.data.forEach(pizza => {
          pizzaMenu.appendChild(createMenuItem(pizza));
        });
      }
      
      // Загрузка хот-догов
      const hotdogResponse = await supabaseClient
        .from('dishes')
        .select('*')
        .eq('category', 'hotdog');
      
      if (hotdogResponse.error) {
        if (hotdogMenu) hotdogMenu.innerHTML = '<p class="error-text">Ошибка загрузки хот-догов</p>';
      } else if (!hotdogResponse.data.length) {
        if (hotdogMenu) hotdogMenu.innerHTML = '<p class="empty-text">Хот-доги не найдены</p>';
      } else if (hotdogMenu) {
        hotdogMenu.innerHTML = '';
        hotdogResponse.data.forEach(hotdog => {
          hotdogMenu.appendChild(createMenuItem(hotdog));
        });
      }
    } catch (e) {
      if (pizzaMenu) pizzaMenu.innerHTML = '<p class="error-text">Ошибка загрузки меню</p>';
      if (hotdogMenu) hotdogMenu.innerHTML = '<p class="error-text">Ошибка загрузки меню</p>';
    }
  }

  // Создание элемента меню
  function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    menuItem.innerHTML = `
      <div class="menu-item-img" style="background: url('${item.image_url}') center/cover;"></div>
      <div class="menu-item-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="menu-item-footer">
          <div class="price">${item.price} ₽</div>
          <button class="add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
            <i class="fas fa-plus"></i> В корзину
          </button>
        </div>
      </div>
    `;
    
    const addToCartBtn = menuItem.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        const id = btn.getAttribute('data-id');
        const name = btn.getAttribute('data-name');
        const price = btn.getAttribute('data-price');
        addToCart(id, name, price);
      });
    }
    
    return menuItem;
  }

  // Добавление в корзину
  function addToCart(id, name, price) {
    try {
      const existing = cart.find(item => item.id === id);
      
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id,
          name,
          price: Number(price),
          quantity: 1
        });
      }
      
      renderCart();
      showMessage(`Добавлено: ${name}`, false);
    } catch (e) {
      showMessage('Ошибка добавления в корзину');
    }
  }

  // Отрисовка корзины
  function renderCart() {
    try {
      if (!cartDiv) return;
      
      cartDiv.innerHTML = '';
      if (!cart.length) {
        cartDiv.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
        if (cartTotal) cartTotal.textContent = '0 ₽';
        if (btnOrder) btnOrder.disabled = true;
        return;
      }

      if (btnOrder) btnOrder.disabled = false;
      let total = 0;
      
      cart.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <div>${item.price} ₽ × ${item.quantity}</div>
          </div>
          <div class="cart-item-actions">
            <span>${itemTotal} ₽</span>
            <button class="btn btn-secondary remove-item" data-idx="${idx}" style="padding: 5px 10px;">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
        
        cartDiv.appendChild(cartItem);
        
        // Обработчик удаления
        const removeBtn = cartItem.querySelector('.remove-item');
        if (removeBtn) {
          removeBtn.addEventListener('click', (e) => {
            const idx = e.target.closest('button').getAttribute('data-idx');
            if (idx !== null) {
              const removedItem = cart.splice(idx, 1)[0];
              renderCart();
              showMessage(`Удалено: ${removedItem.name}`, false);
            }
          });
        }
      });
      
      if (cartTotal) cartTotal.textContent = `${total} ₽`;
    } catch (e) {
      showMessage('Ошибка отображения корзины');
    }
  }

  // Оформление заказа
  async function createOrder() {
    try {
      if (!cart.length) {
        showMessage('Корзина пуста');
        return;
      }

      const authResponse = await supabaseClient.auth.getUser();
      const user = authResponse.data?.user;
      const userError = authResponse.error;
      
      if (userError || !user) {
        showMessage('Пожалуйста, войдите в систему');
        return;
      }

      // Проверка профиля
      const profileResponse = await supabaseClient
        .from('profiles')
        .select('phone, address')
        .eq('id', user.id)
        .single();
      
      if (profileResponse.error || !profileResponse.data.phone || !profileResponse.data.address) {
        showMessage('Для оформления заказа необходимо заполнить телефон и адрес доставки в профиле');
        return;
      }

      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Создание заказа
      const orderResponse = await supabaseClient
        .from('orders')
        .insert([{
          user_id: user.id,
          order_date: new Date().toISOString(),
          status: 'pending',
          total_amount: total
        }])
        .select()
        .single();

      if (orderResponse.error) throw orderResponse.error;

      // Добавление блюд в заказ
      const orderItems = cart.map(item => ({
        order_id: orderResponse.data.id,
        dish_id: item.id,
        quantity: item.quantity,
        price: item.price
      }));

      const itemsResponse = await supabaseClient
        .from('order_items')
        .insert(orderItems);

      if (itemsResponse.error) throw itemsResponse.error;

      showMessage('Заказ успешно оформлен! Ожидайте доставку.', false);
      cart = [];
      renderCart();
    } catch (error) {
      showMessage(`Ошибка оформления заказа: ${error.message}`);
    }
  }

  // Обработчики событий
  const btnModalSignup = document.getElementById('btn-modal-signup');
  const btnModalLogin = document.getElementById('btn-modal-login');
  const btnModalReset = document.getElementById('btn-modal-reset');
  
  if (btnModalSignup) btnModalSignup.addEventListener('click', signUp);
  if (btnModalLogin) btnModalLogin.addEventListener('click', login);
  if (btnModalReset) btnModalReset.addEventListener('click', resetPassword);
  
  if (btnLogout) btnLogout.addEventListener('click', logout);
  if (btnEditProfile) btnEditProfile.addEventListener('click', editProfile);
  if (btnSaveProfile) btnSaveProfile.addEventListener('click', saveProfile);
  if (btnCancelProfile) btnCancelProfile.addEventListener('click', () => {
    if (profileEdit) profileEdit.classList.remove('profile-active');
    if (profileView) profileView.classList.add('profile-active');
  });
  
  if (btnOrder) btnOrder.addEventListener('click', createOrder);
  
  // Кнопки на главной странице
  const btnOrderNow = document.getElementById('btn-order-now');
  const btnViewMenu = document.getElementById('btn-view-menu');
  const btnCtaSignup = document.getElementById('btn-cta-signup');
  
  if (btnOrderNow) {
    btnOrderNow.addEventListener('click', () => {
      showModal(loginModal);
    });
  }
  
  if (btnViewMenu) {
    btnViewMenu.addEventListener('click', () => {
      supabaseClient.auth.getUser().then((response) => {
        const user = response.data?.user;
        if (user) {
          loadProfile();
          loadMenu();
          showModal(profileModal);
        } else {
          showModal(loginModal);
        }
      });
    });
  }
  
  if (btnCtaSignup) {
    btnCtaSignup.addEventListener('click', () => {
      showModal(signupModal);
    });
  }
  
  // При загрузке страницы проверяем сессию
  supabaseClient.auth.getSession().then((response) => {
    const session = response.data?.session;
    if (session?.user) {
      updateHeader(session.user);
    } else {
      updateHeader(null);
    }
  });
  
  // Инициализация шапки
  updateHeader(null);
  
  // Мобильное меню
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  if (closeMobileNav && hamburger && mobileNav) {
    closeMobileNav.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  if (mobileLoginBtn && hamburger && mobileNav) {
    mobileLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      showModal(loginModal);
    });
  }
  
  // Закрытие мобильного меню при клике на ссылку
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
  if (mobileNavLinks.length && hamburger && mobileNav) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});