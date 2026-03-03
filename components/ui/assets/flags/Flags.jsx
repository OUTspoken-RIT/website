import AroaceFlag from "./flagaroace.svg";
import AromanticFlag from "./flagaromantic.svg";
import AsexualFlag from "./flagasexual.svg";
import BisexualFlag from "./flagbisexual.svg";
import DemiboyFlag from "./flagdemiboy.svg";
import DemigenderFlag from "./flagdemigender.svg";
import DemigirlFlag from "./flagdemigirl.svg";
import DemiromanticFlag from "./flagdemiromantic.svg";
import DemisexualFlag from "./flagdemisexual.svg";
import GenderfluidFlag from "./flaggenderfluid.svg";
import GilbertBakerFlag from "./flaggilbert.svg";
import IntersexFlag from "./flagintersex.svg";
import IntersexInclusiveFlag from "./flagintersexinclusive.svg";
import LesbianFlag from "./flaglesbian.svg";
import MLMFlag from "./flagmlm.svg";
import NonbinaryFlag from "./flagnonbinary.svg";
import PansexualFlag from "./flagpansexual.svg";
import PolyamorousFlag from "./flagpoly.svg";
import ProgressFlag from "./flagprogress.svg";
import TransFlag from "./flagtrans.svg";
import UnlabledFlag from "./flagunlabled.svg";

export function PrideFlag({ variant }) {
  const validVariants = {
    aroace: AroaceFlag,
    aromantic: AromanticFlag,
    aro: AromanticFlag,
    asexual: AsexualFlag,
    ace: AsexualFlag,
    bisexual: BisexualFlag,
    bi: BisexualFlag,
    demiboy: DemiboyFlag,
    demigender: DemigenderFlag, 
    demigirl: DemigirlFlag,
    demiromantic: DemiromanticFlag,
    demisexual: DemisexualFlag,
    genderfluid: GenderfluidFlag,
    "gilbert-baker": GilbertBakerFlag,
    gilbert: GilbertBakerFlag,
    intersex: IntersexFlag,
    intersexinclusive: IntersexInclusiveFlag,
    intersexinclusion: IntersexInclusiveFlag,
    lesbian: LesbianFlag,
    mlm: MLMFlag,
    nonbinary: NonbinaryFlag,
    nb: NonbinaryFlag,
    pansexual: PansexualFlag,
    pan: PansexualFlag,
    polyamorous: PolyamorousFlag,
    poly: PolyamorousFlag,
    progress: ProgressFlag,
    lgbtq: ProgressFlag,
    lgbt: ProgressFlag,
    transgender: TransFlag,
    trans: TransFlag,
    unlabled: UnlabledFlag,
  };

  const safeFlagKey = Object.keys(validVariants).includes(variant) ? variant : "progress";
  const safeFlag = validVariants[safeFlagKey];

  return (
    <img src={safeFlag.src} alt={`${safeFlagKey} pride flag`} className="pride-flag" />
  );
}
