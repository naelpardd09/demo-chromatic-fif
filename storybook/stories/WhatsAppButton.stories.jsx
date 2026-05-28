// Ganti baris import ini untuk memastikan path-nya benar (menggunakan kurung kurawal)
import { WhatsAppButton } from '../../src/components/WhatsAppButton';

const meta = {
  title: 'Presentation/WhatsAppButton',
  component: WhatsAppButton,
  tags: ['autodocs'],
  args: {
    phoneNumber: '628123456789',
    label: 'Hubungi Kami via WhatsApp',
    message: 'Halo, saya ingin bertanya tentang layanan Anda.'
  }
};

export default meta;

export const Default = {};