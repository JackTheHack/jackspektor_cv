import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer2/source-files';

export const Personal = defineDocumentType(() => ({
  name: 'Personal',
  filePathPattern: 'personal.md',
  isSingleton: true,
  fields: {
    givenName: {
      type: 'string',
      description: 'Your first name or given name',
      required: true,
    },
    familyName: {
      type: 'string',
      description: 'Your last name or family name',
      required: true,
    },
    title: {
      type: 'string',
      description: 'Your current job title or a short description of your goal',
      required: true,
    },
    location: {
      type: 'string',
      description:
        'Your general location of residence, not your personal address',
      required: true,
    },
    twitterUsername: {
      type: 'string',
      description: 'Your Twitter username without the "@" symbol',
      required: false,
    },
    phone: {
      type: 'string',
      description: 'Your phone',
      required: false,
    },
    website: {
      type: 'string',
      description: 'Your website',
      required: false,
    },
    email: {
      type: 'string',
      description: 'Your email',
      required: false,
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'A name for the category of skills',
      required: true,
    },
  },
}));

export const PreviousTitle = defineNestedType(() => ({
  name: 'PreviousTitle',
  fields: {
    title: {
      type: 'string',
      description: 'A previous title at this organization',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'The year when you started the position',
      required: true,
    },
    endDate: {
      type: 'string',
      description: 'The year when you ended the position',
      required: true,
    },
  },
}));

export const ProfessionalExperience = defineDocumentType(() => ({
  name: 'ProfessionalExperience',
  filePathPattern: 'professionalExperiences/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'Your most recent title at this organization',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'The name of the company or organization you worked with',
      required: true,
    },
    startDate: {
      type: 'string',
      description: 'A descriptor of when you started the position',
      required: true,
    },
    endDate: {
      type: 'string',
      description:
        'If you no longer work with this organization, provide a descriptor of when you ended the position',
      required: false,
    },
    previousTitles: {
      type: 'list',
      of: PreviousTitle,
      required: false,
    },
  },
}));

export const Achievement = defineDocumentType(() => ({
  name: 'Achievement',
  filePathPattern: 'achievements/*.md',
  fields: {
    achievement: {
      type: 'string',
      description:
        'The name of the degree or certification of your achievement',
      required: true,
    },
    organization: {
      type: 'string',
      description:
        'The name of the school, organization, or program you earned your achievement from',
      required: true,
    },
    completionYear: {
      type: 'number',
      description: 'The year you earned your achievement',
      required: false,
    },
  },
}));

export const Expertise = defineDocumentType(() => ({
  name: 'Expertise',
  filePathPattern: 'expertise/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The name of expertise',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Slug',
      required: true,
    },
    caseStudy: {
      type: 'string',
      description: 'Relevant case study',
      required: false,
    },
  },
}));

export const CaseStudy = defineDocumentType(() => ({
  name: 'CaseStudy',
  filePathPattern: 'caseStudies/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The name of case study',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Slug',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'Case study organization',
      required: true,
    },
    url: {
      type: 'string',
      description: 'Case study url',
      required: false,
    },
    keywords: {
      type: 'string',
      description: 'Case study keywords',
      required: false,
    },
    images: {
      type: 'list',
      of: { type: 'string' },
      description: 'Array of image URLs related to the case study',
      required: false,
    },
  },
}));

export const Testimonial = defineDocumentType(() => ({
  name: 'Testimonial',
  filePathPattern: 'testimonials/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The name of expertise',
      required: true,
    },
    organization: {
      type: 'string',
      description: 'Description of person',
      required: false,
    },
    name: {
      type: 'string',
      description: 'Person name',
      required: false,
    },
  },
}));

export const AdditionalInfo = defineDocumentType(() => ({
  name: 'AdditionalInfo',
  filePathPattern: 'additionalInfo.md',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The name of the additional info section',
      required: true,
    },
  },
}));

export const PrivateField = defineDocumentType(() => ({
  name: 'PrivateField',
  filePathPattern: 'privateFields/*.md',
  fields: {
    label: {
      type: 'string',
      description: 'A label to describe the private field',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'edit-me/content',
  documentTypes: [
    Personal,
    Skill,
    ProfessionalExperience,
    Achievement,
    AdditionalInfo,
    PrivateField,
    Testimonial,
    CaseStudy,
    Expertise,
  ],
});
