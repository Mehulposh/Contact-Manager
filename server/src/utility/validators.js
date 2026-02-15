import { body } from 'express-validator';

const registerValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

const loginValidation = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

const contactValidation = [
  body('name').trim().notEmpty().withMessage('Contact name is required'),
  body('email')
    .optional({ checkFalsy: true })
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('phone').optional().trim(),
  body('notes').optional().trim(),
  body('tags').optional().isArray().withMessage('Tags must be an array'),
];

export {
  registerValidation,
  loginValidation,
  contactValidation,
};