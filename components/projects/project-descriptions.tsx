import React from 'react'

export const ProjectDescriptions = {
  automatisering: (
    <div className="prose">
      <div className="mb-2 text-fg-2">
        I led a strategic project with the goal of making data more accessible for decision-making and automation. By ensuring
         different systems share data effectively, we enable better and more informed decisions 
        in commercial operations. This involves making relevant information available for processes 
        in sales, invoicing, support and Customer Success. The project is designed to deliver robust, flexible 
        structures that are user-friendly, easily accessible across the company and require minimal maintenance.
      </div>
      <div className="mb-2">
        <strong>Goals:</strong>
      </div>
      <ul className="list-disc pl-5 mb-2">
        <li className="mb-2">
          <strong>Better customer contact overview:</strong> All customer communication — from tools like 
          Hubspot, Intercom, personal email and support email — is now linked to the CRM system for easy overview.
        </li>
        <li className="mb-2">
          <strong>New onboarding flow:</strong> A new, automated onboarding email flow ensures basic follow-up without drawing resources from the CS team.
        </li>
        <li className="mb-2">
          <strong>Streamlined support:</strong> A first-line AI assistant handles incoming 
          support inquiries, reducing the need for manual follow-up on simple support cases.
        </li>
        <li className="mb-2">
          <strong>Product data for daily decisions:</strong> Relevant product data is made available via 
          BI dashboards and connected tools (Big Query and Looker), enabling quick data-driven daily decisions.
        </li>
        <li className="mb-2">
          <strong>Reduced manual work:</strong> The need for manual data transfer between systems 
          is drastically reduced, freeing up time for more value-creating activities.
        </li>
      </ul>
    </div>
  ),
  kitefestival: (
    <div className="space-y-2">
      <div className="mb-2">
        It started with 3 friends going to Denmark to kite. Now it's 2 annual festivals with 50+ eager participants gathering to kite.
      </div>
      <div>
        I'm a co-organizer and manage the finances for the winter festival — a closed, all-inclusive snow-kite festival spanning four days.
      </div>
    </div>
  ),
  investorportal: (
    <div className="space-y-2">
      <div className="mb-2">
        The idea of increasing efficiency in the private capital market with digital investor portals was tested in spring 2017. We conducted interviews, analyzed statistics, NOU reports and ran surveys with Norwegian entrepreneurs and investors. There was no doubt that there were significant opportunities to improve information flow, process management and increase liquidity in unlisted shares. The conclusion: this was worth pursuing.
      </div>
      <div className="mb-2">
        Today, OwnersRoom has several thousand registered users, more than 200 customers and has digitalized capital raises totaling approximately 2 billion NOK! As business developer, I helped build the company from the start and contributed to prototype development, commercial experiments, user interviews, strategy development, pilot customer recruitment and securing funding.
      </div>
      <div>
        For more information about OwnersRoom, see <a href="https://ownersroom.com" className="border-b border-sage-300 text-sage-700 hover:border-sage-500 hover:text-sage-800">https://ownersroom.com</a>.
      </div>
    </div>
  ),
  fouProsjekt: (
    <div className="space-y-2">
      <div className="mb-2">
        A research and development project with support from Skattefunn and Innovation Norway, where we developed new solutions to help companies execute efficient capital processes and build trust in the relationship between companies and investors.
      </div>
      <div className="mb-2">
        The project resulted in insights and the development of the first version of a digital subscription tool. This is now a central part of OwnersRoom's value proposition.
      </div>
      <div>
        My role was to lead the project, apply for support from Innovation Norway and Skattefunn, and follow up on progress and resource usage throughout the project.
      </div>
    </div>
  )
}
