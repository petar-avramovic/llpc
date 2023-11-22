// NOTE: Assertions have been autogenerated by tool/update_llpc_test_checks.py
// RUN: amdllpc -o - -gfxip 11.0 -emit-lgc %s | FileCheck -check-prefixes=CHECK %s
// REQUIRES: do-not-run-me

#version 450 core

layout(location = 0) in vec4 colorIn1;
layout(location = 1) in vec4 colorIn2;
layout(location = 0) out vec4 color;
void main()
{
    bvec4 x = greaterThan (colorIn1, colorIn2);
    bvec4 y = greaterThan (uvec4(colorIn1), uvec4(colorIn2));
    bvec4 z = greaterThan (ivec4(colorIn1), ivec4(colorIn2));

    bvec4 w = equal(x,y);
    bvec4 q = notEqual(w,z);
    color = vec4(q);
}

// CHECK-LABEL: @lgc.shader.FS.main(
// CHECK-NEXT:  .entry:
// CHECK-NEXT:    [[TMP0:%.*]] = call <4 x float> (...) @lgc.create.read.generic.input.v4f32(i32 1, i32 0, i32 0, i32 0, i32 16, i32 poison)
// CHECK-NEXT:    [[TMP1:%.*]] = call <4 x float> (...) @lgc.create.read.generic.input.v4f32(i32 0, i32 0, i32 0, i32 0, i32 16, i32 poison)
// CHECK-NEXT:    [[TMP2:%.*]] = extractelement <4 x float> [[TMP1]], i64 0
// CHECK-NEXT:    [[TMP3:%.*]] = extractelement <4 x float> [[TMP0]], i64 0
// CHECK-NEXT:    [[TMP4:%.*]] = fcmp ogt float [[TMP2]], [[TMP3]]
// CHECK-NEXT:    [[TMP5:%.*]] = extractelement <4 x float> [[TMP1]], i64 1
// CHECK-NEXT:    [[TMP6:%.*]] = extractelement <4 x float> [[TMP0]], i64 1
// CHECK-NEXT:    [[TMP7:%.*]] = fcmp ogt float [[TMP5]], [[TMP6]]
// CHECK-NEXT:    [[TMP8:%.*]] = extractelement <4 x float> [[TMP1]], i64 2
// CHECK-NEXT:    [[TMP9:%.*]] = extractelement <4 x float> [[TMP0]], i64 2
// CHECK-NEXT:    [[TMP10:%.*]] = fcmp ogt float [[TMP8]], [[TMP9]]
// CHECK-NEXT:    [[TMP11:%.*]] = extractelement <4 x float> [[TMP1]], i64 3
// CHECK-NEXT:    [[TMP12:%.*]] = extractelement <4 x float> [[TMP0]], i64 3
// CHECK-NEXT:    [[TMP13:%.*]] = fcmp ogt float [[TMP11]], [[TMP12]]
// CHECK-NEXT:    [[TMP14:%.*]] = fptoui <4 x float> [[TMP1]] to <4 x i32>
// CHECK-NEXT:    [[TMP15:%.*]] = fptoui <4 x float> [[TMP0]] to <4 x i32>
// CHECK-NEXT:    [[TMP16:%.*]] = extractelement <4 x i32> [[TMP14]], i64 0
// CHECK-NEXT:    [[TMP17:%.*]] = extractelement <4 x i32> [[TMP15]], i64 0
// CHECK-NEXT:    [[TMP18:%.*]] = extractelement <4 x i32> [[TMP14]], i64 1
// CHECK-NEXT:    [[TMP19:%.*]] = extractelement <4 x i32> [[TMP15]], i64 1
// CHECK-NEXT:    [[TMP20:%.*]] = extractelement <4 x i32> [[TMP14]], i64 2
// CHECK-NEXT:    [[TMP21:%.*]] = extractelement <4 x i32> [[TMP15]], i64 2
// CHECK-NEXT:    [[TMP22:%.*]] = extractelement <4 x i32> [[TMP14]], i64 3
// CHECK-NEXT:    [[TMP23:%.*]] = extractelement <4 x i32> [[TMP15]], i64 3
// CHECK-NEXT:    [[TMP24:%.*]] = fptosi <4 x float> [[TMP1]] to <4 x i32>
// CHECK-NEXT:    [[TMP25:%.*]] = fptosi <4 x float> [[TMP0]] to <4 x i32>
// CHECK-NEXT:    [[TMP26:%.*]] = extractelement <4 x i32> [[TMP24]], i64 0
// CHECK-NEXT:    [[TMP27:%.*]] = extractelement <4 x i32> [[TMP25]], i64 0
// CHECK-NEXT:    [[TMP28:%.*]] = icmp sgt i32 [[TMP26]], [[TMP27]]
// CHECK-NEXT:    [[TMP29:%.*]] = extractelement <4 x i32> [[TMP24]], i64 1
// CHECK-NEXT:    [[TMP30:%.*]] = extractelement <4 x i32> [[TMP25]], i64 1
// CHECK-NEXT:    [[TMP31:%.*]] = icmp sgt i32 [[TMP29]], [[TMP30]]
// CHECK-NEXT:    [[TMP32:%.*]] = extractelement <4 x i32> [[TMP24]], i64 2
// CHECK-NEXT:    [[TMP33:%.*]] = extractelement <4 x i32> [[TMP25]], i64 2
// CHECK-NEXT:    [[TMP34:%.*]] = icmp sgt i32 [[TMP32]], [[TMP33]]
// CHECK-NEXT:    [[TMP35:%.*]] = extractelement <4 x i32> [[TMP24]], i64 3
// CHECK-NEXT:    [[TMP36:%.*]] = extractelement <4 x i32> [[TMP25]], i64 3
// CHECK-NEXT:    [[TMP37:%.*]] = icmp sgt i32 [[TMP35]], [[TMP36]]
// CHECK-NEXT:    [[TMP38:%.*]] = icmp ule i32 [[TMP16]], [[TMP17]]
// CHECK-NEXT:    [[TMP39:%.*]] = xor i1 [[TMP4]], [[TMP38]]
// CHECK-NEXT:    [[TMP40:%.*]] = icmp ule i32 [[TMP18]], [[TMP19]]
// CHECK-NEXT:    [[TMP41:%.*]] = xor i1 [[TMP7]], [[TMP40]]
// CHECK-NEXT:    [[TMP42:%.*]] = icmp ule i32 [[TMP20]], [[TMP21]]
// CHECK-NEXT:    [[TMP43:%.*]] = xor i1 [[TMP10]], [[TMP42]]
// CHECK-NEXT:    [[TMP44:%.*]] = icmp ule i32 [[TMP22]], [[TMP23]]
// CHECK-NEXT:    [[TMP45:%.*]] = xor i1 [[TMP13]], [[TMP44]]
// CHECK-NEXT:    [[TMP46:%.*]] = xor i1 [[TMP28]], [[TMP39]]
// CHECK-NEXT:    [[TMP47:%.*]] = xor i1 [[TMP31]], [[TMP41]]
// CHECK-NEXT:    [[TMP48:%.*]] = xor i1 [[TMP34]], [[TMP43]]
// CHECK-NEXT:    [[TMP49:%.*]] = xor i1 [[TMP45]], [[TMP37]]
// CHECK-NEXT:    [[TMP50:%.*]] = select reassoc nnan nsz arcp contract afn i1 [[TMP46]], float 1.000000e+00, float 0.000000e+00
// CHECK-NEXT:    [[TMP51:%.*]] = insertelement <4 x float> poison, float [[TMP50]], i64 0
// CHECK-NEXT:    [[TMP52:%.*]] = select reassoc nnan nsz arcp contract afn i1 [[TMP47]], float 1.000000e+00, float 0.000000e+00
// CHECK-NEXT:    [[TMP53:%.*]] = insertelement <4 x float> [[TMP51]], float [[TMP52]], i64 1
// CHECK-NEXT:    [[TMP54:%.*]] = select reassoc nnan nsz arcp contract afn i1 [[TMP48]], float 1.000000e+00, float 0.000000e+00
// CHECK-NEXT:    [[TMP55:%.*]] = insertelement <4 x float> [[TMP53]], float [[TMP54]], i64 2
// CHECK-NEXT:    [[TMP56:%.*]] = select reassoc nnan nsz arcp contract afn i1 [[TMP49]], float 1.000000e+00, float 0.000000e+00
// CHECK-NEXT:    [[TMP57:%.*]] = insertelement <4 x float> [[TMP55]], float [[TMP56]], i64 3
// CHECK-NEXT:    call void (...) @lgc.create.write.generic.output(<4 x float> [[TMP57]], i32 0, i32 0, i32 0, i32 0, i32 0, i32 poison)
// CHECK-NEXT:    ret void
//
