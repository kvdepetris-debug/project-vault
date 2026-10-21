# AI 3D Modeling and 3D Printing GitHub Library

Updated 2026-10-20. Repositories below were verified as existing public GitHub repositories through the connected GitHub account. **Reference and evaluation catalog only**: no installations, no GPU compute, no model weights downloaded. Existence does not verify production quality, maintenance, security, printability or commercial-use rights. Some projects use separate restrictive model-weight licenses.

## Decision guide

- **Figurines, miniatures and sculptures**: image -> Hunyuan3D/TRELLIS.2 -> Blender/Trimesh repair -> slicer -> print.
- **Dimensioned functional parts**: text/sketch -> AI text-to-CAD -> build123d or FreeCAD -> STEP validation -> STL/3MF -> slicer -> test fit.
- **Photographs of existing objects**: segment background, generate approximate mesh, compare measured dimensions; for accuracy use real measurements and CAD rather than treating single-image reconstruction as metrology.

## AI image-to-3D and reconstruction

| Verified repository | Priority | Role / limitation |
|---|---|---|
| [Tencent/Hunyuan3D-2](https://github.com/Tencent/Hunyuan3D-2) | High | Image-to-3D geometry/textures; decorative prototypes |
| [microsoft/TRELLIS](https://github.com/microsoft/TRELLIS) | High | Image-to-3D textured meshes and alternative representations |
| [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | High | Higher-fidelity image-to-3D; significant GPU requirements |
| [VAST-AI-Research/TripoSR](https://github.com/VAST-AI-Research/TripoSR) | High | Fast image-to-mesh baseline |
| [Stability-AI/stable-fast-3d](https://github.com/Stability-AI/stable-fast-3d) | High | Fast textured mesh generation; verify model-weight license |
| [facebookresearch/sam-3d-objects](https://github.com/facebookresearch/sam-3d-objects) | Evaluate | Object reconstruction from images; verify weights and setup |
| [stepfun-ai/Step1X-3D](https://github.com/stepfun-ai/Step1X-3D) | Evaluate | Alternative 3D generative model; test hardware and licenses |
| [Jackicus/Local-Mesh](https://github.com/Jackicus/Local-Mesh) | Evaluate | Local UI to compare multiple image-to-3D backends |
| [halldm2000/image-to-3d](https://github.com/halldm2000/image-to-3d) | Evaluate | Text-to-image-to-3D multi-model pipeline |
| [Bingeljell/image-to-3dlab](https://github.com/Bingeljell/image-to-3dlab) | Evaluate | Integrated local mesh/rigging workflow; verify independently |
| [nerfstudio-project/nerfstudio](https://github.com/nerfstudio-project/nerfstudio) | Reference | Neural reconstruction for scans/photogrammetry workflows |
| [threestudio-project/threestudio](https://github.com/threestudio-project/threestudio) | Research | Research-oriented text-to-3D framework |
| [ashawkey/stable-dreamfusion](https://github.com/ashawkey/stable-dreamfusion) | Research | Experimental text-to-3D research |
| [huggingface/diffusers](https://github.com/huggingface/diffusers) | Foundation | Generative-model infrastructure, not a complete print tool |

## AI CAD and parametric modeling

| Verified repository | Priority | Role / limitation |
|---|---|---|
| [sagarshedage7/text-to-cad](https://github.com/sagarshedage7/text-to-cad) | High | Local LLM generates build123d scripts and STEP; subprocess is not hardened isolation |
| [essll/TextToCad](https://github.com/essll/TextToCad) | Evaluate | Natural-language CAD with STEP/STL exports |
| [ktraghuram2/TextCAD-Studio](https://github.com/ktraghuram2/TextCAD-Studio) | Evaluate | Chat-based CAD code generation and viewer |
| [gumyr/build123d](https://github.com/gumyr/build123d) | Essential | Python parametric solid CAD foundation |
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | High | Parametric CAD scripting alternative |
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | Essential | Desktop mechanical CAD and STEP editing |
| [openscad/openscad](https://github.com/openscad/openscad) | High | Script-based dimensioned printable designs |

## Mesh preparation and print validation

| Verified repository | Priority | Role / limitation |
|---|---|---|
| [blender/blender](https://github.com/blender/blender) | Essential | Sculpting and mesh cleanup |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | Essential | Programmatic mesh analysis and repairs |
| [isl-org/Open3D](https://github.com/isl-org/Open3D) | High | Mesh/point-cloud processing |
| [elalish/manifold](https://github.com/elalish/manifold) | High | Reliable manifold mesh booleans |
| [3MFConsortium/lib3mf](https://github.com/3MFConsortium/lib3mf) | High | 3MF export and interoperability |

## Slicing and manufacturing

| Verified repository | Priority | Role / limitation |
|---|---|---|
| [SoftFever/OrcaSlicer](https://github.com/SoftFever/OrcaSlicer) | Essential | Slicer for many FDM printers |
| [prusa3d/PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) | High | Alternative FDM slicing and supports |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | High | Alternative FDM slicer |
| [bambulab/BambuStudio](https://github.com/bambulab/BambuStudio) | High | Bambu-focused slicing |
| [GridSpace/grid-apps](https://github.com/GridSpace/grid-apps) | Evaluate | Browser-based CAM and slicing tools |
| [slic3r/Slic3r](https://github.com/slic3r/Slic3r) | Reference | Original slicer family and historical algorithms |

## Supporting vision and scanning

| Verified repository | Priority | Role / limitation |
|---|---|---|
| [facebookresearch/segment-anything](https://github.com/facebookresearch/segment-anything) | High | Object masks for image-to-3D preprocessing |
| [facebookresearch/sam3](https://github.com/facebookresearch/sam3) | Evaluate | Segmentation improvements; check weights and intended uses |
| [facebookresearch/sam-3d-body](https://github.com/facebookresearch/sam-3d-body) | Research | Human-body reconstruction, distinct from general product CAD |

## Recommended architecture for a future 3D-printing website

1. Web frontend: reuse Next.js, Tailwind and shadcn/ui from the premium website library.
2. Choose workflow: **artistic mesh** or **dimensioned CAD**. Store source images, prompts, units and model provenance.
3. Queue generation on an isolated worker with strict resource limits. GPU models may need 8-24GB+ VRAM and substantial storage; cloud GPUs cost money.
4. Run automated geometry checks: manifold/watertight, disconnected shells, minimum wall thickness, bounding box, orientation and unit scale. These checks reduce errors but do not guarantee strength or successful printing.
5. Show an interactive 3D preview with manual approval and editable dimensions for CAD parts.
6. Export STL and/or 3MF for printing, STEP for parametric engineering exchange where supported, and GLB for previews.
7. Provide slicer handoff, not automatic print initiation. Require user confirmation of printer, material, nozzle, layer height and safety.
8. If later sold online, verify generated-content commercial rights, third-party IP, model license, product safety and customer upload handling.

## Pilot acceptance tests

- **Figurine**: single-view image -> 3D mesh -> repaired printable STL; inspect front, back, base, thin features and support needs.
- **Bracket**: natural-language dimensions -> parametric build123d -> STEP -> STL; verify hole spacing, tolerances and strength assumptions against physical measurements.
- **Model from blueprint**: PDF/sketch -> manually confirmed measurements -> CAD; reject missing dimensions rather than hallucinate them.
- **Repeatability**: save input prompts, settings, version, output file hashes, runtime and failure notes.

## Integration with current catalog

This extends the existing premium website stack and GitHub Tool Library. AI 3D model generation can power a future custom 3D-print storefront, but do not automatically merge into Thornhush, GamePilot or Project Vault. Keep unrelated applications unchanged.
