export type ChatPathId = "personal" | "organisation" | "instructor";

export type ChatField = {
  id: string;
  labelKey: string;
  type: "text" | "tel" | "email" | "select";
  required?: boolean;
  options?: { value: string; labelKey: string }[];
};

export const chatPaths: {
  id: ChatPathId;
  kind: ChatPathId;
  labelKey: string;
  fields: ChatField[];
}[] = [
  {
    id: "personal",
    kind: "personal",
    labelKey: "chat.pathPersonal",
    fields: [
      { id: "name", labelKey: "chat.fields.name", type: "text", required: true },
      { id: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
      {
        id: "ageGroup",
        labelKey: "chat.fields.ageGroup",
        type: "select",
        required: true,
        options: [
          { value: "Child (3–8)", labelKey: "chat.options.child" },
          { value: "Junior (9–12)", labelKey: "chat.options.junior" },
          { value: "Teen (13–18)", labelKey: "chat.options.teen" },
          { value: "Adult", labelKey: "chat.options.adult" },
          { value: "Senior Citizen", labelKey: "chat.options.senior" },
        ],
      },
      {
        id: "forWhom",
        labelKey: "chat.fields.forWhom",
        type: "select",
        required: true,
        options: [
          { value: "Myself", labelKey: "chat.options.myself" },
          { value: "My Child", labelKey: "chat.options.myChild" },
          { value: "My Teenager", labelKey: "chat.options.myTeen" },
          { value: "Woman / Women", labelKey: "chat.options.women" },
          { value: "Senior Citizen", labelKey: "chat.options.senior" },
          { value: "Family", labelKey: "chat.options.family" },
          { value: "Small Group", labelKey: "chat.options.smallGroup" },
          { value: "Other", labelKey: "chat.options.other" },
        ],
      },
      {
        id: "lookingFor",
        labelKey: "chat.fields.lookingFor",
        type: "select",
        required: true,
        options: [
          { value: "Self-Defense", labelKey: "chat.options.selfDefense" },
          { value: "Personal Safety", labelKey: "chat.options.personalSafety" },
          { value: "Child Safety", labelKey: "chat.options.childSafety" },
          { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
          { value: "Family Safety", labelKey: "chat.options.familySafety" },
          { value: "Confidence Building", labelKey: "chat.options.confidence" },
          { value: "Awareness & Prevention", labelKey: "chat.options.awareness" },
          { value: "Fitness + Self-Defense", labelKey: "chat.options.fitness" },
          { value: "Not Sure — Need Guidance", labelKey: "chat.options.notSure" },
        ],
      },
      {
        id: "format",
        labelKey: "chat.fields.format",
        type: "select",
        options: [
          { value: "Offline Classes", labelKey: "chat.options.offline" },
          { value: "Online Training", labelKey: "chat.options.online" },
          { value: "Weekend Workshop", labelKey: "chat.options.weekend" },
          { value: "Private / Small Group", labelKey: "chat.options.privateGroup" },
          { value: "Not Sure", labelKey: "chat.options.notSure" },
        ],
      },
      { id: "city", labelKey: "chat.fields.city", type: "text", required: true },
    ],
  },
  {
    id: "organisation",
    kind: "organisation",
    labelKey: "chat.pathOrg",
    fields: [
      { id: "name", labelKey: "chat.fields.name", type: "text", required: true },
      { id: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
      { id: "email", labelKey: "chat.fields.email", type: "email" },
      { id: "organization", labelKey: "chat.fields.organization", type: "text", required: true },
      {
        id: "role",
        labelKey: "chat.fields.role",
        type: "select",
        required: true,
        options: [
          { value: "School Management", labelKey: "chat.options.schoolMgmt" },
          { value: "Principal / Head", labelKey: "chat.options.principal" },
          { value: "Teacher / Coordinator", labelKey: "chat.options.teacher" },
          { value: "Corporate HR", labelKey: "chat.options.hr" },
          { value: "Corporate Admin / Management", labelKey: "chat.options.admin" },
          { value: "Other", labelKey: "chat.options.other" },
        ],
      },
      {
        id: "orgType",
        labelKey: "chat.fields.orgType",
        type: "select",
        required: true,
        options: [
          { value: "School", labelKey: "chat.options.school" },
          { value: "College / University", labelKey: "chat.options.college" },
          { value: "Medical College / Healthcare Institution", labelKey: "chat.options.medical" },
          { value: "Corporate / Workplace", labelKey: "chat.options.corporate" },
          { value: "Society / Community", labelKey: "chat.options.society" },
          { value: "Other", labelKey: "chat.options.other" },
        ],
      },
      {
        id: "lookingFor",
        labelKey: "chat.fields.orgLookingFor",
        type: "select",
        required: true,
        options: [
          { value: "Self-Defense Training", labelKey: "chat.options.selfDefense" },
          { value: "Staff Safety Training", labelKey: "chat.options.staffSafety" },
          { value: "Student Safety Program", labelKey: "chat.options.studentSafety" },
          { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
          { value: "Workplace Safety", labelKey: "chat.options.workplaceSafety" },
          { value: "Awareness / Prevention Program", labelKey: "chat.options.awareness" },
          { value: "One-Day Workshop", labelKey: "chat.options.oneDay" },
          { value: "Regular Training Program", labelKey: "chat.options.regular" },
          { value: "Not Sure — Need Guidance", labelKey: "chat.options.notSure" },
        ],
      },
      {
        id: "participants",
        labelKey: "chat.fields.participants",
        type: "select",
        options: [
          { value: "1–20", labelKey: "chat.options.p20" },
          { value: "20–50", labelKey: "chat.options.p50" },
          { value: "50–100", labelKey: "chat.options.p100" },
          { value: "100–300", labelKey: "chat.options.p300" },
          { value: "300+", labelKey: "chat.options.p300plus" },
        ],
      },
      { id: "city", labelKey: "chat.fields.city", type: "text", required: true },
    ],
  },
  {
    id: "instructor",
    kind: "instructor",
    labelKey: "chat.pathInstructor",
    fields: [
      { id: "name", labelKey: "chat.fields.name", type: "text", required: true },
      { id: "phone", labelKey: "chat.fields.phone", type: "tel", required: true },
      { id: "email", labelKey: "chat.fields.email", type: "email" },
      {
        id: "ageGroup",
        labelKey: "chat.fields.instructorAge",
        type: "select",
        required: true,
        options: [
          { value: "Under 18", labelKey: "chat.options.u18" },
          { value: "18–25", labelKey: "chat.options.a18" },
          { value: "26–40", labelKey: "chat.options.a26" },
          { value: "41–60", labelKey: "chat.options.a41" },
          { value: "60+", labelKey: "chat.options.a60" },
        ],
      },
      {
        id: "background",
        labelKey: "chat.fields.background",
        type: "select",
        required: true,
        options: [
          { value: "Martial Arts", labelKey: "chat.options.martial" },
          { value: "Teacher / School Staff", labelKey: "chat.options.schoolStaff" },
          { value: "Sports / Fitness", labelKey: "chat.options.sports" },
          { value: "HR / Corporate", labelKey: "chat.options.hr" },
          { value: "Social Work / Community", labelKey: "chat.options.social" },
          { value: "Parent", labelKey: "chat.options.parent" },
          { value: "Other", labelKey: "chat.options.other" },
        ],
      },
      {
        id: "interest",
        labelKey: "chat.fields.interest",
        type: "select",
        required: true,
        options: [
          { value: "Teaching Safety & Self-Defense", labelKey: "chat.options.teachSafety" },
          { value: "Working with Children / Teens", labelKey: "chat.options.workKids" },
          { value: "Women's Safety", labelKey: "chat.options.womenSafety" },
          { value: "School / Corporate Programs", labelKey: "chat.options.schoolCorp" },
          { value: "Building a Career / Income", labelKey: "chat.options.career" },
          { value: "Community Service", labelKey: "chat.options.community" },
          { value: "Expanding My Existing Training", labelKey: "chat.options.expand" },
          { value: "Not Sure — I Need Guidance", labelKey: "chat.options.notSure" },
        ],
      },
      { id: "city", labelKey: "chat.fields.city", type: "text", required: true },
      {
        id: "experience",
        labelKey: "chat.fields.experience",
        type: "select",
        options: [
          { value: "Yes", labelKey: "chat.options.yes" },
          { value: "No", labelKey: "chat.options.no" },
        ],
      },
      { id: "experienceNote", labelKey: "chat.fields.experienceNote", type: "text" },
    ],
  },
];
