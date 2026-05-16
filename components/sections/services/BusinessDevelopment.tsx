const services = [
  {
    title: 'Business Plans',
    benefits: 'Strategic roadmaps that attract investors and guide critical decisions.',
    details: [
      'Executive Summary',
      'Business Description',
      'Market Analysis',
      'Organization & Management',
      'Products/Services',
      'Marketing Strategy',
      'Operational Plan',
      'Financial Projections',
      'Funding Requirements',
      'Appendices',
    ],
  },
  {
    title: 'Feasibility Studies',
    benefits: 'Comprehensive assessments to minimize risks and maximise opportunities.',
    details: [
      'Executive Summary',
      'Project Description',
      'Market Analysis',
      'Technical/Financial/Organizational Feasibility',
      'Regulatory Considerations',
      'Risk Assessment',
      'Conclusions & Recommendations',
    ],
  },
  {
    title: 'Training Services',
    benefits: 'Programs designed to enhance management and business skills.',
    details: [
      'Business Skills',
      'Accounting Proficiency',
      'Start-Up Strategies',
      'Governance Principles',
      'Advanced Administration',
      'Customer Service',
      'Strategic Management',
      'Risk Management',
      'Industry-Specific Topics',
    ],
  },
  {
    title: 'Financial Management',
    benefits: 'Solutions for accurate reporting, tax compliance, and bookkeeping.',
    details: [
      'Financial Statement Preparation',
      'Tax Consulting',
      'Bookkeeping',
      'Data Analysis',
      'Compliance Checks',
      'Reporting Process',
      'Software Integration',
    ],
  },
  {
    title: 'Digital Knowledge Training',
    benefits: 'Target training to improve digital literacy and technology integration.',
    details: ['Digital Literacy', 'Technology Integration', 'Proficiency in Digital Tools'],
  },
  {
    title: 'Turnaround Solutions',
    benefits: 'Tailored strategies to revitalize struggling businesses.',
    details: [
      'Current Operations Assessment',
      'Strategic Planning',
      'Cost Reduction',
      'Revenue Enhancement',
      'Employee Engagement',
      'Stakeholder Communication',
      'Performance Monitoring',
    ],
  },
  {
    title: 'Mentoring',
    benefits: 'Personalized guidance for business owners.',
    details: [
      'Initial Assessment',
      'Goal Setting',
      'Regular Meetings',
      'Resource Sharing',
      'Skill Development',
      'Feedback & Network Opportunities',
    ],
  },
]

export default function BusinessDevelopment() {
  return (
    <div className="py-8">
      <p className="text-surface-600 mb-8 max-w-3xl">
        From strategic planning to hands-on training, we help businesses and municipalities
        build the capabilities they need to thrive.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-brand-500"
          >
            <h3 className="text-lg font-semibold text-surface-900 mb-2">{s.title}</h3>
            <p className="text-sm text-surface-500 mb-4">
              <span className="font-medium text-surface-700">Benefits:</span> {s.benefits}
            </p>
            <ul className="space-y-1">
              {s.details.map((d, j) => (
                <li key={j} className="text-sm text-surface-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
