type CertItem = {
    blockchainId: string;
    title: string;
}

export const getCertificates = () => {
    // todo: Create an API.
    const res: CertItem[] = [
        {
            blockchainId: '732838',
            title: 'Google Cloud Certified - Professional Cloud Developer',
        },
        {
            blockchainId: '672721',
            title: 'Google Cloud Certified - Professional Cloud Architect',
        }
      ];
    return res;
}
