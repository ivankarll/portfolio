/**
 * Certificates data
 *
 * Fields:
 *  id            - unique identifier
 *  title         - certificate/course name
 *  issuer        - issuing organization
 *  date          - e.g. "March 2024"
 *  credentialUrl - link to verify credential (set null to hide button)
 *  image         - badge or certificate image (set null for icon fallback)
 *  category      - e.g. "Cloud", "Web Dev", "AI/ML" (for optional filtering)
 */

export const certificates = [
  {
    id: 1,
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Month 2024',
    credentialUrl: 'https://example.com/credential',
    image: null,
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Another Certificate',
    issuer: 'Another Organization',
    date: 'Month 2024',
    credentialUrl: null,
    image: null,
    category: 'Cloud',
  },
];
