'use server'

import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import { ContactFormTemplate } from '@/email/emailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData) => {
    try {
        const senderEmail = formData.get('senderEmail');
        const message = formData.get('senderText');

        if (validateString(senderEmail) === false) {
            return {
                error: 'Invalid sender email',
            }
        }

        if (validateString(message) === false) {
            return {
                error: 'Invalid Message', 
            }
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        return { success: true, message: 'Send email successfully' };
    } catch (error) {
        return {
            error: getErrorMessage(error),
        }
    }
};