import { useFormContext } from "react-hook-form";
import { Banner } from "../../../../components/common/Banner";
import { FormStep } from "../../../../components/forms/FormStep";
import { YesNoField } from "../../../../components/forms/YesNoField";
import type { Step } from "../../../../forms/types";

export const returnDocumentsStep: Step = {
  id: "return-documents",
  title:
    "You will need to submit a certified copy of your birth certificate and certified copies of any prior name changes. Do you want these documents returned afterwards?",
  description:
    "Prior name change documents could include a marriage certificate, divorce decree, or previous name change court order.",
  fields: ["shouldReturnOriginalDocuments"],
  component: ({ stepConfig }) => {
    const form = useFormContext();
    return (
      <FormStep stepConfig={stepConfig}>
        <YesNoField
          name="shouldReturnOriginalDocuments"
          label="Return original documents?"
          labelHidden
          yesLabel="Yes, return my documents"
          noLabel="No, I don't need my documents returned"
        />
        {form.watch("shouldReturnOriginalDocuments") === false && (
          <Banner variant="warning">
            We strongly recommend getting your certified documents back from the
            court. You will need to present these documents alongside other name
            change forms in the future!
          </Banner>
        )}
      </FormStep>
    );
  },
};
