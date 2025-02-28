import axios from 'axios';

export async function validateNPWP(npwp: string): Promise<boolean> {
  try {
    // Panggil API DJP (dummy service)
    const response = await axios.get(`https://api.djp.go.id/validate_npwp?npwp=${npwp}`);
    return response.data.isValid; // Pastikan API ini mengembalikan status validasi
  } catch (error) {
    console.error('Error validating NPWP:', error);
    return false;
  }
}
