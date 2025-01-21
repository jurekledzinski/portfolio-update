import { z } from 'zod';

export type ResponseSuccess = {
  statusCode: number;
  body: {
    message: string;
  };
};

export const ContactEmailSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  email: z.string({
    required_error: 'Email is required',
  }),
  message: z.string({
    required_error: 'Message is required',
  }),
});

export type ContactEmail = z.infer<typeof ContactEmailSchema>;

export const AnalyticsSchema = z.object({
  type: z.string(),
  cv: z.record(z.number()),
  github: z.record(z.number()),
  linkedin: z.record(z.number()),
  totalByDay: z.object({
    cv: z.record(z.number()),
    github: z.record(z.number()),
    linkedin: z.record(z.number()),
  }),
  totalByMonth: z.object({
    cv: z.record(z.number()),
    github: z.record(z.number()),
    linkedin: z.record(z.number()),
  }),
  totalByYear: z.object({
    cv: z.record(z.number()),
    github: z.record(z.number()),
    linkedin: z.record(z.number()),
  }),
  total: z.object({
    cv: z.number(),
    github: z.number(),
    linkedin: z.number(),
  }),
});

export type AnalyticsType = z.infer<typeof AnalyticsSchema>;
