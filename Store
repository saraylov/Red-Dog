<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P-HUB - Пицца и хот-доги с доставкой</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary: #ff3a00;
      --primary-dark: #e03500;
      --secondary: #ffcc00;
      --accent: #e63946;
      --dark-bg: #1a1a1a;
      --dark-card: #2a2a2a;
      --light: #f8f9fa;
      --light-gray: #e9ecef;
      --text: #ffffff;
      --text-secondary: #cccccc;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      --radius: 12px;
      --transition: all 0.3s ease;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
      background-color: var(--dark-bg);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
      position: relative;
    }

    /* Анимация волн */
    body::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 10% 20%, rgba(255, 58, 0, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(255, 204, 0, 0.05) 0%, transparent 20%);
      background-size: 300% 300%;
      z-index: -1;
      animation: waveAnimation 20s ease infinite;
    }

    @keyframes waveAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    header {
      background-color: var(--dark-card);
      box-shadow: var(--shadow);
      position: sticky;
      top: 0;
      z-index: 100;
      animation: slideDown 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes slideDown {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 28px;
      font-weight: 800;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: var(--transition);
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .logo i {
      font-size: 32px;
      color: var(--secondary);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .logo span {
      color: var(--text);
    }

    .nav-links {
      display: flex;
      gap: 30px;
    }

    .nav-links a {
      font-weight: 600;
      position: relative;
      padding: 5px 0;
      color: var(--text-secondary);
      transition: var(--transition);
    }

    .nav-links a:hover {
      color: var(--text);
    }

    .nav-links a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: var(--transition);
    }

    .nav-links a:hover:after {
      width: 100%;
    }

    .nav-buttons {
      display: flex;
      gap: 15px;
      align-items: center;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      transition: var(--transition);
      overflow: hidden;
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }

    .user-avatar:hover {
      transform: scale(1.05) translateY(-8px);
      box-shadow: 0 0 15px rgba(255, 58, 0, 0.7);
    }

    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      top: 50px;
      background-color: var(--dark-card);
      min-width: 160px;
      box-shadow: var(--shadow);
      z-index: 1;
      border-radius: var(--radius);
      overflow: hidden;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .dropdown-content.show {
      display: block;
    }

    .dropdown-content a {
      color: var(--text);
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      transition: background-color 0.2s;
      font-size: 0.95rem;
      position: relative;
      overflow: hidden;
    }

    .dropdown-content a::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 58, 0, 0.2), transparent);
      transition: 0.5s;
    }

    .dropdown-content a:hover::before {
      left: 100%;
    }

    .dropdown-content a:hover {
      background-color: var(--dark-bg);
      color: var(--primary);
    }

    .dropdown-content i {
      margin-right: 8px;
      width: 18px;
      text-align: center;
    }

    .hero {
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                  url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3') center/cover no-repeat;
      height: 80vh;
      display: flex;
      align-items: center;
      color: white;
      text-align: center;
      border-bottom: 3px solid var(--primary);
      position: relative;
      overflow: hidden;
    }

    /* Параллакс эффект */
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3') center/cover no-repeat;
      z-index: -1;
      transform: translateZ(-1px) scale(1.2);
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
      animation: fadeInUp 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
      animation: textGlow 3s infinite alternate;
    }

    @keyframes textGlow {
      from { text-shadow: 0 0 5px rgba(255, 58, 0, 0.5); }
      to { text-shadow: 0 0 20px rgba(255, 58, 0, 0.8), 0 0 30px rgba(255, 204, 0, 0.6); }
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 30px;
      font-weight: 300;
      color: var(--text-secondary);
      animation: fadeIn 1.5s ease;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
      animation: fadeIn 1.8s ease;
    }

    .btn {
      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: var(--transition);
      border: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .btn:hover::before {
      opacity: 1;
    }

    .btn-primary {
      background-color: var(--primary);
      color: white;
      box-shadow: 0 4px 15px rgba(255, 58, 0, 0.4);
    }

    .btn-primary:hover {
      background-color: var(--primary-dark);
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 25px rgba(255, 58, 0, 0.6);
    }

    .btn-secondary {
      background-color: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
    }

    .categories {
      padding: 80px 0;
      background-color: var(--dark-bg);
      animation: fadeIn 1s ease;
    }

    .section-title {
      text-align: center;
      margin-bottom: 50px;
      animation: fadeIn 0.8s ease;
    }

    .section-title h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      color: var(--text);
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      display: inline-block;
    }

    .section-title h2::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      border-radius: 2px;
      animation: lineGrow 1s ease-out;
    }

    @keyframes lineGrow {
      from { width: 0; }
      to { width: 80px; }
    }

    .section-title p {
      color: var(--text-secondary);
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .category-card {
      background: var(--dark-card);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
      border: 1px solid #444;
      animation: cardAppear 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-origin: bottom;
      position: relative;
      overflow: hidden;
    }

    @keyframes cardAppear {
      0% { opacity: 0; transform: translateY(30px) scale(0.9); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }

    .category-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255, 58, 0, 0.1), rgba(255, 204, 0, 0.1));
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .category-card:hover::before {
      opacity: 1;
    }

    .category-card:hover {
      transform: translateY(-10px) rotate(2deg);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
      border-color: var(--primary);
    }

    .category-img {
      height: 200px;
      background-size: cover;
      background-position: center;
      transition: transform 0.5s ease;
    }

    .category-card:hover .category-img {
      transform: scale(1.05);
    }

    .pizza-img {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                  url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3') center/cover;
    }

    .hotdog-img {
      background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                  url('https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3') center/cover;
    }

    .category-content {
      padding: 25px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .category-content h3 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: var(--text);
      transition: var(--transition);
    }

    .category-card:hover .category-content h3 {
      color: var(--secondary);
    }

    .category-content p {
      color: var(--text-secondary);
      margin-bottom: 20px;
    }

    .featured {
      padding: 80px 0;
      background-color: var(--dark-bg);
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
      animation: fadeIn 1.2s ease;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .product-card {
      background: var(--dark-card);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
      position: relative;
      border: 1px solid #444;
      animation: cardAppear 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-origin: bottom;
    }

    .product-card:hover {
      transform: translateY(-10px) rotate(-1deg);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8);
      border-color: var(--primary);
    }

    .product-badge {
      position: absolute;
      top: 15px;
      left: 15px;
      background-color: var(--accent);
      color: white;
      padding: 5px 15px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 2;
      animation: badgePulse 2s infinite;
    }

    @keyframes badgePulse {
      0% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(230, 57, 70, 0); }
      100% { box-shadow: 0 0 0 0 rgba(230, 57, 70, 0); }
    }

    .product-img {
      height: 200px;
      background-size: cover;
      background-position: center;
      transition: transform 0.5s ease;
    }

    .product-card:hover .product-img {
      transform: scale(1.1);
    }

    .product-1 {
      background: url('https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3') center/cover;
    }

    .product-2 {
      background: url('https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3') center/cover;
    }

    .product-3 {
      background: url('https://images.unsplash.com/photo-1619740455993-9e612b1af08a?ixlib=rb-4.0.3') center/cover;
    }

    .product-4 {
      background: url('https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3') center/cover;
    }

    .product-content {
      padding: 25px;
    }

    .product-content h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;
      color: var(--text);
      transition: var(--transition);
    }

    .product-card:hover .product-content h3 {
      color: var(--secondary);
    }

    .product-content p {
      color: var(--text-secondary);
      margin-bottom: 15px;
      font-size: 0.95rem;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
    }

    .price {
      font-weight: 700;
      font-size: 1.3rem;
      color: var(--text);
      transition: var(--transition);
    }

    .product-card:hover .price {
      color: var(--secondary);
    }

    .add-to-cart {
      background-color: var(--primary);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
    }

    .add-to-cart::after {
      content: '+';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }

    .add-to-cart:hover {
      background-color: var(--primary-dark);
      transform: scale(1.2) rotate(90deg);
      box-shadow: 0 0 15px rgba(255, 58, 0, 0.6);
    }

    .how-it-works {
      padding: 80px 0;
      background-color: var(--dark-bg);
      text-align: center;
      animation: fadeIn 1.4s ease;
    }

    .steps {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 50px;
    }

    .step {
      flex: 1;
      min-width: 250px;
      max-width: 300px;
      padding: 30px;
      background: var(--dark-card);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      position: relative;
      border: 1px solid #444;
      transition: var(--transition);
      animation: fadeInUp 1s ease;
    }

    .step:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
      border-color: var(--primary);
    }

    .step-number {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      background-color: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      animation: pulse 2s infinite;
    }

    .step-icon {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 20px;
      transition: var(--transition);
    }

    .step:hover .step-icon {
      color: var(--secondary);
      transform: scale(1.2);
    }

    .step h3 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: var(--text);
      transition: var(--transition);
    }

    .step:hover h3 {
      color: var(--secondary);
    }

    .step p {
      color: var(--text-secondary);
    }

    .testimonials {
      padding: 80px 0;
      background-color: var(--dark-bg);
      border-top: 1px solid #333;
      animation: fadeIn 1.6s ease;
    }

    .reviews {
      display: flex;
      gap: 30px;
      overflow-x: auto;
      padding: 20px 0;
      scrollbar-width: thin;
    }

    .review-card {
      min-width: 350px;
      background: var(--dark-card);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      padding: 30px;
      position: relative;
      border: 1px solid #444;
      transition: var(--transition);
      animation: cardAppear 0.8s ease;
    }

    .review-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
      border-color: var(--primary);
    }

    .rating {
      color: var(--secondary);
      margin-bottom: 15px;
    }

    .rating i {
      text-shadow: 0 0 5px rgba(255, 204, 0, 0.5);
    }

    .review-text {
      font-style: italic;
      margin-bottom: 20px;
      color: var(--text-secondary);
      line-height: 1.8;
      position: relative;
    }

    .review-text::before,
    .review-text::after {
      content: '"';
      font-size: 2rem;
      color: var(--primary);
      opacity: 0.5;
      position: absolute;
    }

    .review-text::before {
      top: -15px;
      left: -15px;
    }

    .review-text::after {
      bottom: -25px;
      right: -15px;
    }

    .review-author {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-size: cover;
      border: 2px solid var(--primary);
      transition: var(--transition);
    }

    .review-card:hover .author-avatar {
      transform: scale(1.1);
      border-color: var(--secondary);
    }

    .author-1 {
      background: url('https://randomuser.me/api/portraits/women/32.jpg') center/cover;
    }

    .author-2 {
      background: url('https://randomuser.me/api/portraits/men/54.jpg') center/cover;
    }

    .author-3 {
      background: url('https://randomuser.me/api/portraits/women/67.jpg') center/cover;
    }

    .author-info h4 {
      font-weight: 600;
      margin-bottom: 5px;
      color: var(--text);
      transition: var(--transition);
    }

    .review-card:hover .author-info h4 {
      color: var(--secondary);
    }

    .author-info p {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .cta-section {
      padding: 100px 0;
      background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                  url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3') center/cover;
      color: white;
      text-align: center;
      border-top: 3px solid var(--primary);
      border-bottom: 3px solid var(--primary);
      animation: fadeIn 1.8s ease;
      position: relative;
      overflow: hidden;
    }

    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(255, 58, 0, 0.2), rgba(255, 204, 0, 0.2));
      z-index: 1;
      animation: gradientShift 6s infinite alternate;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      100% { background-position: 100% 50%; }
    }

    .cta-section h2 {
      font-size: 2.8rem;
      margin-bottom: 20px;
      text-transform: uppercase;
      position: relative;
      z-index: 2;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
    }

    .cta-section p {
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto 40px;
      font-weight: 300;
      color: var(--text-secondary);
      position: relative;
      z-index: 2;
    }

    .cta-section .btn {
      position: relative;
      z-index: 2;
      animation: pulse 2s infinite;
    }

    footer {
      background-color: #111;
      color: white;
      padding: 60px 0 30px;
      animation: fadeIn 2s ease;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-column h3 {
      font-size: 1.3rem;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 10px;
      color: var(--text);
    }

    .footer-column h3:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 2px;
      background-color: var(--primary);
      transition: width 0.5s ease;
    }

    .footer-column:hover h3:after {
      width: 100px;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 10px;
      position: relative;
      padding-left: 15px;
    }

    .footer-links li::before {
      content: '➤';
      position: absolute;
      left: 0;
      color: var(--primary);
      transition: transform 0.3s ease;
    }

    .footer-links li:hover::before {
      transform: translateX(5px);
    }

    .footer-links a {
      color: #999;
      transition: var(--transition);
      display: inline-block;
    }

    .footer-links a:hover {
      color: var(--primary);
      padding-left: 5px;
      transform: translateX(5px);
    }

    .social-links {
      display: flex;
      gap: 15px;
      margin-top: 20px;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: var(--transition);
    }

    .social-links a:hover {
      background-color: var(--primary);
      transform: translateY(-5px) rotate(15deg);
      box-shadow: 0 5px 15px rgba(255, 58, 0, 0.4);
    }

    .copyright {
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #777;
      font-size: 0.9rem;
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background-color: var(--dark-card);
      border-radius: var(--radius);
      width: 100%;
      max-width: 500px;
      padding: 40px;
      position: relative;
      animation: modalOpen 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid #444;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
    }

    @keyframes modalOpen {
      from { transform: translateY(-50px) scale(0.9); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }

    .close-modal {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-secondary);
      transition: var(--transition);
    }

    .close-modal:hover {
      color: var(--text);
      transform: rotate(90deg);
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: var(--text);
    }

    .form-group input {
      width: 100%;
      padding: 14px;
      background: #333;
      border: 1px solid #444;
      border-radius: 8px;
      font-size: 1rem;
      color: var(--text);
      transition: var(--transition);
    }

    .form-group input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(255, 58, 0, 0.2);
      outline: none;
    }

    .form-footer {
      margin-top: 25px;
      text-align: center;
    }

    .form-footer a {
      color: var(--primary);
      font-weight: 500;
      position: relative;
    }

    .form-footer a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--primary);
      transition: width 0.3s ease;
    }

    .form-footer a:hover::after {
      width: 100%;
    }

    .form-footer p {
      color: var(--text-secondary);
    }

    /* Модальное окно профиля */
    #profile-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.3s ease;
    }

    .profile-modal-content {
      background-color: var(--dark-card);
      border-radius: var(--radius);
      width: 90%;
      max-width: 1200px;
      max-height: 90vh;
      overflow-y: auto;
      padding: 30px;
      position: relative;
      animation: modalOpen 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid #444;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);
    }

    .user-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #333;
    }

    .profile-section {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: var(--radius);
      padding: 30px;
      margin-bottom: 40px;
      border: 1px solid #444;
      transition: var(--transition);
    }

    .profile-section:hover {
      border-color: var(--primary);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    #profile-view, #profile-edit {
      display: none;
    }

    .profile-active {
      display: block !important;
      animation: fadeIn 0.5s ease;
    }

    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-top: 30px;
    }

    .menu-item {
      background: var(--dark-card);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
      border: 1px solid #444;
      animation: cardAppear 0.6s ease;
    }

    .menu-item:hover {
      transform: translateY(-10px) rotate(1deg);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
      border-color: var(--primary);
    }

    .menu-item-img {
      height: 180px;
      background-size: cover;
      background-position: center;
      transition: transform 0.5s ease;
    }

    .menu-item:hover .menu-item-img {
      transform: scale(1.1);
    }

    .menu-item-content {
      padding: 20px;
    }

    .menu-item-content h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: var(--text);
      transition: var(--transition);
    }

    .menu-item:hover .menu-item-content h3 {
      color: var(--secondary);
    }

    .menu-item-content p {
      color: var(--text-secondary);
      margin-bottom: 15px;
      font-size: 0.95rem;
    }

    .menu-item-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .cart-container {
      background: rgba(0, 0, 0, 0.2);
      border-radius: var(--radius);
      padding: 30px;
      margin-top: 40px;
      border: 1px solid #444;
      transition: var(--transition);
    }

    .cart-container:hover {
      border-color: var(--primary);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #444;
      animation: fadeIn 0.3s ease;
    }

    .cart-total {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 1.2rem;
      padding: 20px 0;
      margin-top: 10px;
      color: var(--text);
      animation: fadeIn 0.4s ease;
    }

    .error-message {
      background-color: #e63946;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      margin-bottom: 15px;
      text-align: center;
      display: none;
      animation: shake 0.5s;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
    }

    @media (max-width: 992px) {
      .hero h1 {
        font-size: 2.8rem;
      }
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 20px;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
      }

      .hero h1 {
        font-size: 2.3rem;
      }

      .hero p {
        font-size: 1.2rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .steps {
        flex-direction: column;
        align-items: center;
      }

      .step {
        max-width: 100%;
      }
    }

    @media (max-width: 576px) {
      .hero {
        height: 70vh;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .section-title h2 {
        font-size: 2rem;
      }

      .product-card, .category-card {
        min-width: 100%;
      }

      .review-card {
        min-width: 300px;
      }
      
      .user-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
      }
    }
  </style>
  <script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="#" class="logo">
          <i class="fas fa-pizza-slice"></i>
          <span>P-HUB</span>
        </a>
        <div class="nav-links">
          <a href="#pizzas">Пиццы</a>
          <a href="#hotdogs">Хот-доги</a>
          <a href="#how-it-works">Как это работает</a>
          <a href="#testimonials">Отзывы</a>
        </div>
        <div class="nav-buttons" id="nav-buttons">
          <button id="btn-login-header" class="btn btn-secondary">Войти</button>
        </div>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Самые горячие пиццы в городе</h1>
        <p>Наслаждайтесь итальянской пиццей и американскими хот-догами с бесплатной доставкой</p>
        <div class="cta-buttons">
          <button id="btn-order-now" class="btn btn-primary">Заказать сейчас</button>
          <button id="btn-view-menu" class="btn btn-secondary">Посмотреть меню</button>
        </div>
      </div>
    </div>
  </section>

  <section class="categories" id="pizzas">
    <div class="container">
      <div class="section-title">
        <h2>Наши горячие категории</h2>
        <p>Выберите то, что вам по душе</p>
      </div>
      <div class="category-grid">
        <div class="category-card">
          <div class="category-img pizza-img"></div>
          <div class="category-content">
            <h3>Пиццы</h3>
            <p>Итальянская, американская, вегетарианская и другие виды пиццы на любой вкус</p>
            <button class="btn btn-primary" data-category="pizza">Выбрать пиццу</button>
          </div>
        </div>
        <div class="category-card" id="hotdogs">
          <div class="category-img hotdog-img"></div>
          <div class="category-content">
            <h3>Хот-доги</h3>
            <p>Классические, чили-доги, с беконом и другие варианты горячих хот-догов</p>
            <button class="btn btn-primary" data-category="hotdog">Выбрать хот-дог</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="featured">
    <div class="container">
      <div class="section-title">
        <h2>Популярные блюда</h2>
        <p>Самые любимые нашими клиентами</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-badge">Хит продаж</div>
          <div class="product-img product-1"></div>
          <div class="product-content">
            <h3>Маргарита</h3>
            <p>Классическая итальянская пицца с томатным соусом, моцареллой и базиликом</p>
            <div class="product-footer">
              <div class="price">450 ₽</div>
              <div class="add-to-cart" data-id="1" data-name="Маргарита" data-price="450">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-badge">Новинка</div>
          <div class="product-img product-2"></div>
          <div class="product-content">
            <h3>Пепперони</h3>
            <p>Острая пицца с колбаской пепперони и двойной порцией сыра моцарелла</p>
            <div class="product-footer">
              <div class="price">520 ₽</div>
              <div class="add-to-cart" data-id="2" data-name="Пепперони" data-price="520">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-badge">Хит продаж</div>
          <div class="product-img product-3"></div>
          <div class="product-content">
            <h3>Классический хот-дог</h3>
            <p>Традиционный хот-дог с сосиской, горчицей, кетчупом и луком</p>
            <div class="product-footer">
              <div class="price">250 ₽</div>
              <div class="add-to-cart" data-id="3" data-name="Классический хот-дог" data-price="250">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="product-badge">Рекомендуем</div>
          <div class="product-img product-4"></div>
          <div class="product-content">
            <h3>Хот-дог с беконом</h3>
            <p>Хрустящий бекон, сыр чеддер и специальный соус на свежей булочке</p>
            <div class="product-footer">
              <div class="price">320 ₽</div>
              <div class="add-to-cart" data-id="4" data-name="Хот-дог с беконом" data-price="320">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="how-it-works" id="how-it-works">
    <div class="container">
      <div class="section-title">
        <h2>Как заказать</h2>
        <p>Всего 3 простых шага до вашего заказа</p>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-icon"><i class="fas fa-utensils"></i></div>
          <h3>Выберите блюда</h3>
          <p>Просмотрите наше меню и добавьте понравившиеся блюда в корзину</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-icon"><i class="fas fa-credit-card"></i></div>
          <h3>Оплатите заказ</h3>
          <p>Завершите оформление заказа с помощью удобного способа оплаты</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-icon"><i class="fas fa-truck"></i></div>
          <h3>Получите доставку</h3>
          <p>Наслаждайтесь вкусной едой у себя дома через 30-45 минут</p>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="section-title">
        <h2>Отзывы клиентов</h2>
        <p>Что говорят наши покупатели</p>
      </div>
      <div class="reviews">
        <div class="review-card">
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="review-text">"Пицца просто восхитительная! Тесто тонкое и хрустящее, начинка свежая и вкусная. Доставили быстро и ещё горячей. Обязательно закажу снова!"</p>
          <div class="review-author">
            <div class="author-avatar author-1"></div>
            <div class="author-info">
              <h4>Анна Петрова</h4>
              <p>Постоянный клиент</p>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="review-text">"Хот-доги просто бомба! Особенно с беконом. Порции большие, ингредиенты свежие. Теперь заказываю регулярно по пятницам для всей семьи."</p>
          <div class="review-author">
            <div class="author-avatar author-2"></div>
            <div class="author-info">
              <h4>Дмитрий Соколов</h4>
              <p>Клиент 2 года</p>
            </div>
          </div>
        </div>
        <div class="review-card">
          <div class="rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p class="review-text">"Заказала пиццу и хот-доги на вечеринку. Все пришло вовремя, упаковка отличная, еда была еще теплая. Гости остались довольны! Спасибо!"</p>
          <div class="review-author">
            <div class="author-avatar author-3"></div>
            <div class="author-info">
              <h4>Екатерина Иванова</h4>
              <p>Новый клиент</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Готовы попробовать наши горячие предложения?</h2>
      <p>Зарегистрируйтесь сейчас и получите скидку 15% на первый заказ</p>
      <button id="btn-cta-signup" class="btn btn-primary">Зарегистрироваться</button>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>P-HUB</h3>
          <p>Доставка самых вкусных пицц и хот-догов в вашем городе. Качество, скорость и вкус гарантированы!</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-vk"></i></a>
            <a href="#"><i class="fab fa-telegram"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h3>Меню</h3>
          <ul class="footer-links">
            <li><a href="#pizzas">Пиццы</a></li>
            <li><a href="#hotdogs">Хот-доги</a></li>
            <li><a href="#">Напитки</a></li>
            <li><a href="#">Салаты</a></li>
            <li><a href="#">Десерты</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Информация</h3>
          <ul class="footer-links">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Возврат</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Контакты</h3>
          <ul class="footer-links">
            <li><i class="fas fa-map-marker-alt"></i> г. Москва, ул. Пушкина, 15</li>
            <li><i class="fas fa-phone"></i> +7 (495) 123-45-67</li>
            <li><i class="fas fa-envelope"></i> info@p-hub.ru</li>
            <li><i class="fas fa-clock"></i> Пн-Вс: 10:00 - 23:00</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023 P-HUB. Все права защищены.</p>
      </div>
    </div>
  </footer>

  <div id="login-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Вход в аккаунт</h2>
      <div class="error-message" id="login-error"></div>
      <div class="form-group">
        <label for="modal-email">Email</label>
        <input id="modal-email" type="email" placeholder="email@example.com">
      </div>
      <div class="form-group">
        <label for="modal-password">Пароль</label>
        <input id="modal-password" type="password" placeholder="Ваш пароль">
      </div>
      <button id="btn-modal-login" class="btn btn-primary">Войти</button>
      <div class="form-footer">
        <p>Еще нет аккаунта? <a href="#" id="show-signup">Зарегистрироваться</a></p>
        <p><a href="#" id="show-reset">Забыли пароль?</a></p>
      </div>
    </div>
  </div>

  <div id="signup-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Создание аккаунта</h2>
      <div class="error-message" id="signup-error"></div>
      <div class="form-group">
        <label for="signup-email">Email</label>
        <input id="signup-email" type="email" placeholder="email@example.com">
      </div>
      <div class="form-group">
        <label for="signup-password">Пароль</label>
        <input id="signup-password" type="password" placeholder="Придумайте пароль">
      </div>
      <div class="form-group">
        <label for="signup-confirm">Подтвердите пароль</label>
        <input id="signup-confirm" type="password" placeholder="Повторите пароль">
      </div>
      <button id="btn-modal-signup" class="btn btn-primary">Зарегистрироваться</button>
      <div class="form-footer">
        <p>Уже есть аккаунт? <a href="#" id="show-login">Войти</a></p>
      </div>
    </div>
  </div>

  <div id="reset-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Восстановление пароля</h2>
      <div class="error-message" id="reset-error"></div>
      <div class="form-group">
        <label for="reset-email">Email</label>
        <input id="reset-email" type="email" placeholder="email@example.com">
      </div>
      <button id="btn-modal-reset" class="btn btn-primary">Отправить инструкции</button>
      <div class="form-footer">
        <p><a href="#" id="show-login-from-reset">Вернуться ко входу</a></p>
      </div>
    </div>
  </div>

  <!-- Модальное окно личного кабинета -->
  <div id="profile-modal" class="modal">
    <div class="profile-modal-content">
      <span class="close-modal">&times;</span>
      <div class="container">
        <div class="user-header">
          <div>
            <h2>Привет, <span id="user-email"></span>!</h2>
            <p>Ваш личный кабинет для заказов</p>
          </div>
          <button id="btn-logout" class="btn btn-secondary"><i class="fas fa-sign-out-alt"></i> Выйти</button>
        </div>
        
        <div class="profile-section">
          <h2><i class="fas fa-user-circle"></i> Ваш профиль</h2>
          <div id="profile-view" class="profile-active">
            <div class="profile-info">
              <p><strong>Имя:</strong> <span id="profile-first-name">Не указано</span></p>
              <p><strong>Фамилия:</strong> <span id="profile-last-name">Не указано</span></p>
              <p><strong>Телефон:</strong> <span id="profile-phone">Не указан</span></p>
              <p><strong>Адрес доставки:</strong> <span id="profile-address">Не указан</span></p>
            </div>
            <button id="btn-edit-profile" class="btn btn-primary"><i class="fas fa-edit"></i> Редактировать профиль</button>
          </div>
          
          <div id="profile-edit">
            <div class="form-group">
              <label for="edit-first-name">Имя</label>
              <input type="text" id="edit-first-name" placeholder="Ваше имя">
            </div>
            <div class="form-group">
              <label for="edit-last-name">Фамилия</label>
              <input type="text" id="edit-last-name" placeholder="Ваша фамилия">
            </div>
            <div class="form-group">
              <label for="edit-phone">Телефон</label>
              <input type="tel" id="edit-phone" placeholder="+7 (999) 999-99-99">
            </div>
            <div class="form-group">
              <label for="edit-address">Адрес доставки</label>
              <textarea id="edit-address" rows="3" placeholder="Улица, дом, квартира"></textarea>
            </div>
            <div class="flex-buttons">
              <button id="btn-save-profile" class="btn btn-primary">Сохранить</button>
              <button id="btn-cancel-profile" class="btn btn-secondary">Отмена</button>
            </div>
          </div>
        </div>
        
        <h2><i class="fas fa-pizza-slice"></i> Меню пиццы</h2>
        <div id="pizza-menu" class="menu-grid"></div>
        
        <h2 style="margin-top: 40px;"><i class="fas fa-hotdog"></i> Меню хот-догов</h2>
        <div id="hotdog-menu" class="menu-grid"></div>
        
        <div class="cart-container">
          <h2><i class="fas fa-shopping-cart"></i> Корзина</h2>
          <div id="cart"></div>
          <div class="cart-total">
            <span>Итого:</span>
            <span id="cart-total">0 ₽</span>
          </div>
          <button id="btn-order" class="btn btn-primary" disabled><i class="fas fa-check-circle"></i> Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>

  <script>
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
      
      // Элементы сообщений об ошибках
      const loginError = document.getElementById('login-error');
      const signupError = document.getElementById('signup-error');
      const resetError = document.getElementById('reset-error');
      
      // Показать/скрыть модальные окна
      function showModal(modal) {
        modal.style.display = 'flex';
      }
      
      function hideModal(modal) {
        modal.style.display = 'none';
        // Сбрасываем ошибки при закрытии
        loginError.style.display = 'none';
        signupError.style.display = 'none';
        resetError.style.display = 'none';
      }
      
      // Функция для обновления шапки в зависимости от статуса авторизации
      function updateHeader(user) {
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
          
          // Обработчик клика по кнопке профиля
          profileButton.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
          });
          
          // Обработчики для пунктов меню
          document.getElementById('go-to-profile')?.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.remove('show');
            loadProfile();
            loadMenu();
            showModal(profileModal);
          });
          
          document.getElementById('logout-header')?.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.remove('show');
            logout();
          });
          
          // Закрытие меню при клике вне его области
          document.addEventListener('click', (e) => {
            if (!e.target.closest('.profile-dropdown')) {
              dropdownContent.classList.remove('show');
            }
          });
          
        } else {
          // Пользователь не авторизован - показываем кнопку входа
          navButtons.innerHTML = `
            <button id="btn-login-header" class="btn btn-secondary">Войти</button>
          `;
          
          document.getElementById('btn-login-header')?.addEventListener('click', () => showModal(loginModal));
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
        element.textContent = message;
        element.style.display = 'block';
      }

      // Обработчики для модальных окон
      document.getElementById('show-signup')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(loginModal);
        showModal(signupModal);
      });
      
      document.getElementById('show-login')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(signupModal);
        showModal(loginModal);
      });
      
      document.getElementById('show-reset')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(loginModal);
        showModal(resetModal);
      });
      
      document.getElementById('show-login-from-reset')?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(resetModal);
        showModal(loginModal);
      });
      
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
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value.trim();
        const confirm = document.getElementById('signup-confirm').value.trim();
        
        // Сбросить предыдущие ошибки
        signupError.style.display = 'none';
        
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
        const email = document.getElementById('modal-email').value.trim();
        const password = document.getElementById('modal-password').value.trim();

        // Сбросить предыдущие ошибки
        loginError.style.display = 'none';
        
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
        const email = document.getElementById('reset-email').value.trim();
        
        // Сбросить предыдущие ошибки
        resetError.style.display = 'none';
        
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
        userEmailSpan.textContent = user.email;
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
          const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
          if (userError || !user) return;
          
          const { data, error } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error) {
            console.error('Ошибка загрузки профиля:', error);
            return;
          }
          
          profileFirstName.textContent = data.first_name || 'Не указано';
          profileLastName.textContent = data.last_name || 'Не указано';
          profilePhone.textContent = data.phone || 'Не указан';
          
          // Обработка адреса
          let addressText = 'Не указан';
          if (data.address && data.address.full_address) {
            addressText = data.address.full_address;
          }
          profileAddress.textContent = addressText;
        } catch (e) {
          console.error('Ошибка загрузки профиля:', e);
        }
      }

      // Сохранение профиля
      async function saveProfile() {
        try {
          const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
          if (userError || !user) {
            showMessage('Пожалуйста, войдите в систему');
            return;
          }
          
          const profileData = {
            first_name: editFirstName.value.trim(),
            last_name: editLastName.value.trim(),
            phone: editPhone.value.trim(),
            address: {
              full_address: editAddress.value.trim()
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
          profileEdit.classList.remove('profile-active');
          profileView.classList.add('profile-active');
          loadProfile();
        } catch (e) {
          showMessage(`Ошибка сохранения профиля: ${e.message}`);
        }
      }

      // Редактирование профиля
      async function editProfile() {
        try {
          const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
          if (userError || !user) {
            showMessage('Пожалуйста, войдите в систему');
            return;
          }
          
          const { data, error } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          
          if (error) {
            showMessage(`Ошибка загрузки профиля: ${error.message}`);
            return;
          }
          
          editFirstName.value = data.first_name || '';
          editLastName.value = data.last_name || '';
          editPhone.value = data.phone || '';
          
          if (data.address && data.address.full_address) {
            editAddress.value = data.address.full_address;
          } else {
            editAddress.value = '';
          }
          
          profileView.classList.remove('profile-active');
          profileEdit.classList.add('profile-active');
        } catch (e) {
          showMessage(`Ошибка загрузки профиля: ${e.message}`);
        }
      }

      // Загрузка меню
      async function loadMenu() {
        try {
          pizzaMenu.innerHTML = '<p>Загрузка пицц...</p>';
          hotdogMenu.innerHTML = '<p>Загрузка хот-догов...</p>';
          
          // Загрузка пицц
          const { data: pizzas, error: pizzaError } = await supabaseClient
            .from('dishes')
            .select('*')
            .eq('category', 'pizza');
          
          if (pizzaError) {
            pizzaMenu.innerHTML = '<p>Ошибка загрузки пицц</p>';
          } else if (!pizzas.length) {
            pizzaMenu.innerHTML = '<p>Пиццы не найдены</p>';
          } else {
            pizzaMenu.innerHTML = '';
            pizzas.forEach(pizza => {
              pizzaMenu.appendChild(createMenuItem(pizza));
            });
          }
          
          // Загрузка хот-догов
          const { data: hotdogs, error: hotdogError } = await supabaseClient
            .from('dishes')
            .select('*')
            .eq('category', 'hotdog');
          
          if (hotdogError) {
            hotdogMenu.innerHTML = '<p>Ошибка загрузки хот-догов</p>';
          } else if (!hotdogs.length) {
            hotdogMenu.innerHTML = '<p>Хот-доги не найдены</p>';
          } else {
            hotdogMenu.innerHTML = '';
            hotdogs.forEach(hotdog => {
              hotdogMenu.appendChild(createMenuItem(hotdog));
            });
          }
        } catch (e) {
          pizzaMenu.innerHTML = '<p>Ошибка загрузки меню</p>';
          hotdogMenu.innerHTML = '<p>Ошибка загрузки меню</p>';
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
              <div class="add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
                <i class="fas fa-plus"></i> В корзину
              </div>
            </div>
          </div>
        `;
        
        menuItem.querySelector('.add-to-cart').addEventListener('click', (e) => {
          const btn = e.target.closest('.add-to-cart');
          const id = btn.getAttribute('data-id');
          const name = btn.getAttribute('data-name');
          const price = btn.getAttribute('data-price');
          addToCart(id, name, price);
        });
        
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
          cartDiv.innerHTML = '';
          if (!cart.length) {
            cartDiv.textContent = 'Корзина пуста';
            cartTotal.textContent = '0 ₽';
            btnOrder.disabled = true;
            return;
          }

          btnOrder.disabled = false;
          let total = 0;
          
          cart.forEach((item, idx) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
              <div>
                <strong>${item.name}</strong>
                <div>${item.price} ₽ × ${item.quantity}</div>
              </div>
              <div>
                <span>${itemTotal} ₽</span>
                <button class="btn btn-secondary remove-item" data-idx="${idx}">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            `;
            
            cartDiv.appendChild(cartItem);
            
            // Обработчик удаления
            cartItem.querySelector('.remove-item').addEventListener('click', (e) => {
              const idx = e.target.closest('button').getAttribute('data-idx');
              if (idx !== null) {
                const removedItem = cart.splice(idx, 1)[0];
                renderCart();
                showMessage(`Удалено: ${removedItem.name}`, false);
              }
            });
          });
          
          cartTotal.textContent = `${total} ₽`;
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

          const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
          if (userError || !user) {
            showMessage('Пожалуйста, войдите в систему');
            return;
          }

          // Проверка профиля
          const { data: profile, error: profileError } = await supabaseClient
            .from('profiles')
            .select('phone, address')
            .eq('id', user.id)
            .single();
          
          if (profileError || !profile.phone || !profile.address) {
            showMessage('Для оформления заказа необходимо заполнить телефон и адрес доставки в профиле');
            return;
          }

          const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

          // Создание заказа
          const { data: orderData, error: orderError } = await supabaseClient
            .from('orders')
            .insert([{
              user_id: user.id,
              order_date: new Date().toISOString(),
              status: 'pending',
              total_amount: total
            }])
            .select()
            .single();

          if (orderError) throw orderError;

          // Добавление блюд в заказ
          const orderItems = cart.map(item => ({
            order_id: orderData.id,
            dish_id: item.id,
            quantity: item.quantity,
            price: item.price
          }));

          const { error: itemsError } = await supabaseClient
            .from('order_items')
            .insert(orderItems);

          if (itemsError) throw itemsError;

          showMessage('Заказ успешно оформлен! Ожидайте доставку.', false);
          cart = [];
          renderCart();
        } catch (error) {
          showMessage(`Ошибка оформления заказа: ${error.message}`);
        }
      }

      // Обработчики событий
      document.getElementById('btn-modal-signup')?.addEventListener('click', signUp);
      document.getElementById('btn-modal-login')?.addEventListener('click', login);
      document.getElementById('btn-modal-reset')?.addEventListener('click', resetPassword);
      
      btnLogout?.addEventListener('click', logout);
      btnEditProfile?.addEventListener('click', editProfile);
      btnSaveProfile?.addEventListener('click', saveProfile);
      btnCancelProfile?.addEventListener('click', () => {
        profileEdit.classList.remove('profile-active');
        profileView.classList.add('profile-active');
      });
      
      btnOrder?.addEventListener('click', createOrder);
      
      // Кнопки на главной странице
      document.getElementById('btn-order-now')?.addEventListener('click', () => {
        showModal(loginModal);
      });
      
      document.getElementById('btn-view-menu')?.addEventListener('click', () => {
        supabaseClient.auth.getUser().then(({ data: { user } }) => {
          if (user) {
            loadProfile();
            loadMenu();
            showModal(profileModal);
          } else {
            showModal(loginModal);
          }
        });
      });
      
      document.getElementById('btn-cta-signup')?.addEventListener('click', () => {
        showModal(signupModal);
      });
      
      // При загрузке страницы проверяем сессию
      supabaseClient.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          updateHeader(session.user);
        } else {
          updateHeader(null);
        }
      });
      
      // Инициализация шапки
      updateHeader(null);
    });
  </script>
</body>
</html>
