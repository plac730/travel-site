import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal.js';

var mobileMenu = new MobileMenu();
var featuresRevealOnScroll = new RevealOnScroll('.feature-item','85%');
var testimonialsRevealOnScroll = new RevealOnScroll('.testimonial', '60%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
