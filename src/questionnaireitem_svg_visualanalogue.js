/**
A QuestionnaireItem presenting a Visual Analogue Scale (100pt).

@class QuestionnaireItemVisualAnalogueScale

@augments QuestionnaireItemSVG
@augments QuestionnaireItem

@param {string} [className] CSS class
@param {string} question
@param {boolean} [required=false]

@param {string} [captionRight] The caption of the left label.
@param {string} [captionLeft] The caption of the right label.
*/
function QuestionnaireItemVisualAnalogueScale(className, question, required, captionLeft, captionRight) {
    QuestionnaireItem.call(this, className, question, required);

    this.captionLeft = captionLeft;
    this.captionRight = captionRight;
}
QuestionnaireItemVisualAnalogueScale.prototype = Object.create(QuestionnaireItemSVG.prototype);
QuestionnaireItemVisualAnalogueScale.prototype.constructor = QuestionnaireItemVisualAnalogueScale;
QuestionnaireItemVisualAnalogueScale.prototype._setupSVG = function() {
    this.scaleImage.setAttribute("viewBox", "0 2 170 19.39");
    this.scaleImage.innerHTML = '@@include("../svg_scales/visual_analogue_scale100pt_include.svg")';

    this.scaleImage.getElementById("labelLeft").textContent = this.captionLeft;
    this.scaleImage.getElementById("labelRight").textContent = this.captionRight;
};
QuestionnaireItemVisualAnalogueScale.prototype._getAnswerElements = function() {
    return this.scaleImage.getElementsByTagName("ellipse");
};
QuestionnaireItemVisualAnalogueScale.prototype.getAnswerOptions = function(data) {
    return "10-109";
};
